import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  links = [{name: 'Create Infringement', url: '/process/startprocess/trafficProcess'}, {name: 'Tasks', url:'/process/tasklist'} ];

  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  ngOnInit(): void {
  }
 
}
