import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CamundaRestService } from '../camunda-rest.service';
import { Task } from '../schemas/Task';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = null;
  taskId: string;
  formKey: string;

  groups$: Observable<string[]>;

  displayedColumns: string[] = ['name', 'assignee', 'created'];

  constructor(
    private camundaRestService: CamundaRestService,
    private route: ActivatedRoute, private authService: AuthService) {

  }

  ngOnInit() {
    this.groups$ = this.authService.currentGroups$;
    this.groups$.subscribe(groups => {
      if (this.route.params != null) {
        this.route.params.subscribe(params => {
          if (params.id != null) {
            this.taskId = params.id;
            this.getFormKey();
          } else {
            this.getTasks(groups);
          }
        });
      }
    });
  }

  getFormKey(): void {
    this.camundaRestService
      .getTaskFormKey(this.taskId)
      .subscribe(formKey => this.formKey = formKey.key);
  }

  getTasks(groups: string[]): void {
    if (groups && groups.indexOf('camunda BPM Administrators') > -1) {
      this.camundaRestService
      .getTasksByGroup('trafficAdmin')
      .subscribe(tasks => {
        this.tasks = tasks;
      });
    } else {
      this.authService.currentUser$
      .subscribe(user => {
        this.camundaRestService
        .getTasksByAssignee(user)
        .subscribe(tasks => {
          this.tasks = tasks;
        });
      });
    }
  }
}
