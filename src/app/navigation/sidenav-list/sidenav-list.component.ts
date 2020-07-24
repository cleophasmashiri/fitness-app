import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output()
  onCloseEvent = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  isAuthenticated: boolean;

  constructor(private authSvc: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    this.isAuth$
      .subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }
  close() {
    this.onCloseEvent.emit();
  }
  logout() {
    this.authSvc.logout();
  }
}