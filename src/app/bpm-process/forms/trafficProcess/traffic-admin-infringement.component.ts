import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';
import { CompleteTaskComponent } from '../general/complete-task.component';
import { Infringement } from '../../schemas/infringement.model';
import { InfringementType } from '../../schemas/infringement-type';

@Component({
  selector: 'traffic-admin-infringement',
  templateUrl: './traffic-admin-infringement.component.html',
  styleUrls: []
})
export class TrafficAdminInfringementComponent extends CompleteTaskComponent {
  submitted:boolean = false;
  model = new Infringement('', InfringementType.Other,'', '', '', '', '', '', '');
  adminChoices = [{name: 'Cancel Infringement', value: 'Cancel'}, 
  {name: 'Assign Another Driver', value: 'Assign Another Driver'}, {name: 'Go To Court', value: 'Go To Court'}];


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

}

