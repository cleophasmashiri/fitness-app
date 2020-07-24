import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcesslistComponent } from './processlist/processlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { StartProcessComponent } from './start-process/start-process.component';
import { GenericForm } from './generic-form.component';
import { CamundaRestService } from './camunda-rest.service';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { BpmProcessRoutingModule } from './bpm-process-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NewProcessComponent } from './new-process/new-process.component';
import { TrafficProcessModule } from './forms/trafficProcess/traffic-process.module';
import { MaterialModule } from '../material-module/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskViewComponent } from './task-view/task-view.component';
import { AuthGuard } from '../auth/store/auth.guard';

@NgModule({
  declarations: [ProcesslistComponent,
    TasklistComponent,
    MainComponent,
    StartProcessComponent,
    GenericForm,
    NewProcessComponent,
    TaskViewComponent],
  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BpmProcessRoutingModule,
    TrafficProcessModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [CamundaRestService, AuthGuard]
})
export class BpmProcessModule { }
