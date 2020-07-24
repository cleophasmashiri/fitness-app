import { Component, OnInit } from '@angular/core';
import { CamundaRestService } from '../camunda-rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  taskId: string;
  formKey: string;

  constructor(
    private camundaRestService: CamundaRestService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (this.route.params != null) {
      this.route.params.subscribe(params => {
        if (params.id != null) {
          this.taskId = params.id;
          this.getFormKey();
        }
      });
    }
  }

  getFormKey(): void {
    this.camundaRestService
      .getTaskFormKey(this.taskId)
      .subscribe(formKey => this.formKey = formKey.key);
  }

}
