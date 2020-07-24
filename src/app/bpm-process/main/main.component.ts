import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  links = [{name: 'Tasks', url:'/process/tasklist'}]

  activeLink = this.links[0];

  background: ThemePalette = undefined;
  isStaff$: Observable<boolean>;
  isStaff = false;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  ngOnInit(): void {
    this.isStaff$ = this.authService.isStaff$;
    this.isStaff$
    .subscribe(isStaff => {
      this.isStaff = isStaff;
      if(isStaff) {
        this.links = [{name: 'Create Infringement', url: '/process/startprocess/trafficProcess'}, {name: 'Tasks', url:'/process/tasklist'} ];
      } else {
        this.links = [{name: 'Tasks', url:'/process/tasklist'} ];
      }
    });
  }

  constructor(private authService: AuthService) {

  }
 
}
