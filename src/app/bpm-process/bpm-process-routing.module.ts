import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProcesslistComponent } from './processlist/processlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { StartProcessComponent } from './start-process/start-process.component';
import { NewProcessComponent } from './new-process/new-process.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { AuthGuard } from '../auth/store/auth.guard';

const routes: Routes = [
    { path: 'process', component: MainComponent, canLoad: [AuthGuard],
    children: [{ path: '', component: ProcesslistComponent, canLoad: [AuthGuard] },
    { path: 'new', component: NewProcessComponent, canLoad: [AuthGuard] },
    { path: 'startprocess/:processdefinitionkey', component: StartProcessComponent, canLoad: [AuthGuard]},
    { path: 'tasklist', component: TasklistComponent, canLoad: [AuthGuard]},
    { path: 'tasklist/:id', component: TaskViewComponent, canLoad: [AuthGuard]}
  ] }
  ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class BpmProcessRoutingModule { }
