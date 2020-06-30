import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output()
  onCloseEvent = new EventEmitter<void>();
  isAuthenticated: boolean;

  constructor(private authSvc: AuthService) { }

  ngOnDestroy(): void {
    this.authSvc.authenticated.unsubscribe();
  }

  ngOnInit() {
    this.authSvc.authenticated.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  close() {
    this.onCloseEvent.emit();
  }

}
