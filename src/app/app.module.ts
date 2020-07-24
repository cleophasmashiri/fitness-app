import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material-module/material.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth/auth.service';
import { BpmProcessModule } from './bpm-process/bpm-process.module';
import { reducers } from './app.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    BpmProcessModule,
    StoreModule.forRoot(reducers)
  ],  
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
