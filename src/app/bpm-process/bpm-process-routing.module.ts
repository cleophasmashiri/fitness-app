import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProcesslistComponent } from './processlist/processlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { StartProcessComponent } from './start-process/start-process.component';
import { NewProcessComponent } from './new-process/new-process.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
    { path: 'process', component: MainComponent, 
    children: [{ path: '', component: ProcesslistComponent },
    { path: 'new', component: NewProcessComponent },
    { path: 'startprocess/:processdefinitionkey', component: StartProcessComponent },
    { path: 'tasklist', component: TasklistComponent },
    { path: 'tasklist/:id', component: TaskViewComponent }
  ] }
  ];

  @NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class BpmProcessRoutingModule { }