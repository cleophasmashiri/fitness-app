import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output()
  sidenavToggle = new EventEmitter<void>();
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

  toggle() {
    this.sidenavToggle.emit();
  }

}
