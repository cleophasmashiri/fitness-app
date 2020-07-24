import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  sidenavToggle = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  isAuthenticated: boolean;

  constructor(private store: Store<fromRoot.State>, private authSvc: AuthService) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    this.isAuth$
    .subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  toggle() {
    this.sidenavToggle.emit();
  }

  logout() {
    this.authSvc.logout();
  }

}
