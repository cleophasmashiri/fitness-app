import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { UserData } from './user.model';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import { Router } from '@angular/router';
import * as Auth from './store/auth.actions';

@Injectable()
export class AuthService {

    private engineRestUrl = '/engine-rest/';
    private currentUserSubject: BehaviorSubject<UserData>;
    public currentUser$: Observable<string>;
    public currentGroups$: Observable<string[]>;
    public isAuth$: Observable<boolean>;
    public isStaff$: Observable<boolean>;

    // this.linkedDevices$ = this.store.pipe(
    //     select(fromLinkedDevicesReducer.getLinkedDevices)
    //   );


    public get currentUserValue(): any {
        return this.currentUserSubject && this.currentUserSubject.value;
    }

    constructor(private router: Router, private http: HttpClient, private store: Store<fromRoot.State>) { }

    initAuthListener() {
        this.currentUser$ = this.store.pipe(
            select(fromRoot.getUsername)
        );
        this.currentGroups$ = this.store.pipe(
            select(fromRoot.getGroups)
        );

        this.isStaff$ = this.store.pipe(
            select(fromRoot.getGroups)
        ).pipe(map(groups => groups && groups.indexOf('camunda BPM Administrators') > -1));

        this.isAuth$ = this.store.pipe(
            select(fromRoot.getIsAuth)
        );

        this.currentUser$.subscribe(user => {
            if (!user) {
                this.router.navigate(['/login']);
            } else {
                this.handleAuthentication(user)
                .subscribe(groups => {
                    this.router.navigate(['/process/tasklist']);
                });
            }
        });
    }

    getCurrentUser(): UserData {
        const user = localStorage.getItem('currentUser');
        if (user) {
            return JSON.parse(user);
        }
    }

    login(user: UserData) {
        const endpoint = `${this.engineRestUrl}engine/default/identity/verify`;
        return this.http.post<any>(endpoint, {
            password: user.password,
            authenticatedUserPassword: user.password,
            username: user.username
        }).pipe(tap(user1 => {
            this.store.dispatch(new Auth.SetAuthenticated(user.username));
            // this.handleAuthentication(user.username);
        }), catchError(err => {
            console.log(err);
            return err;
        }));
    }

    handleAuthentication(username: string) {
        const endpoint = `${this.engineRestUrl}identity/groups?userId=${username}`;
        return this.http.get<any>(endpoint).pipe(
            tap(groups => {
                if (groups && groups.groups) {
                   const mappedGroups = groups.groups.map(g => g.name);
                   this.store.dispatch(new Auth.SetGroups(mappedGroups));
                   localStorage.setItem('currentUser', JSON.stringify({username, groups: mappedGroups}));
                   return mappedGroups;
                }
                this.store.dispatch(new Auth.SetGroups(null));
                return null;
            }),
            catchError(err => {
                console.log(err);
                return err;
            })
        );
    }

    handleError(err: any) {

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.store.dispatch(new Auth.SetGroups(undefined));
        this.store.dispatch(new Auth.SetAuthenticated(undefined));
        this.router.navigate(['/login']);
    }

    registerUser(user: UserData) {
        return this.http.post<any>(`${this.engineRestUrl}engine/default/identity/register`, {
            password: user.password,
            authenticatedUserPassword: user.password,
            username: user.username
        });
    }
}
