import { AuthData } from './auth-data.model';
import { UserData } from './user.model';
import { Subject } from 'rxjs';

export class AuthService {

    private user: UserData;

    authenticated =  new Subject<boolean>();

    registerUser(auth: AuthData) {
        this.user = { email: auth.email, userId: Math.round(Math.random() * 1000).toString() };
    }

    login(auth: AuthData) {
        this.user = { email: auth.email, userId: Math.round(Math.random() * 1000).toString() };
        this.authenticated.next(true);
    }

    getUser(): UserData {
        return { ... this.user };
    }

    logout() {
        this.user = null;
        this.authenticated.next(false);
    }

    isAuth() {
        return this.user != null;
    }
}