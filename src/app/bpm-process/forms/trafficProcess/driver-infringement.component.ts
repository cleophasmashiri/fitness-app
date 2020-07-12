import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';
import { CompleteTaskComponent } from '../general/complete-task.component';
import { Infringement } from '../../schemas/infringement.model';
import { InfringementType } from '../../schemas/infringement-type';

@Component({
  selector: 'driver-infringement',
  templateUrl: './driver-infringement.component.html',
  styleUrls: []
})
export class DriverInfringementComponent extends CompleteTaskComponent {

  submitted:boolean = false;
  model = new Infringement('', InfringementType.Other,'', '', '', '', '', '');
  driverChoices = [{name: 'Nominate Another Driver/Make Representation/Go To Court', value: 'other'}, {name: 'Submit Proof Of Payment', value: 'Pay'}];

  constructor(route: ActivatedRoute,
    router: Router,
    camundaRestService: CamundaRestService) {
    super(route, router, camundaRestService);
    this.route.params.subscribe(params => {
      const taskId = params['id'];
      const variableNames = Object.keys(this.model).join(',');
      this.loadExistingVariables(taskId, variableNames);
    });
  }

  showTasks() {
    this.submitted = false;
  }

}

