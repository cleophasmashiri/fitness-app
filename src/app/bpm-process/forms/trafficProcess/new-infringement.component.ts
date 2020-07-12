import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';
import { CompleteTaskComponent } from '../general/complete-task.component';
import { Infringement } from '../../schemas/infringement.model';
import { InfringementType } from '../../schemas/infringement-type';
import { NgForm } from '@angular/forms';
import { StartProcessInstanceComponent } from '../general/start-process-instance.component';

@Component({
  selector: 'new-infringement',
  templateUrl: './new-infringement.component.html',
  styleUrls: ['./new-infringement.component.scss']
})
export class NewInfringementComponent extends StartProcessInstanceComponent {
  submitted: boolean = false;
  model = new Infringement('', InfringementType.Other, '', '', '', '', '', '');

  infringmentTypes = [{ value: 'Other', name: 'Other' }, { value: 'OverSpeeding', name: 'Over-Speeding' }, { value: 'ParkingInfringement', name: 'Parking Infringement' }];
  links = [{name: 'Create another infringement', url: '/process/startprocess/trafficProcess'}, {name: 'View Tasks', url:'/process/tasklist'} ];

  route: ActivatedRoute
  camundaRestService: CamundaRestService

  constructor(route: ActivatedRoute,
    camundaRestService: CamundaRestService
    ) {
      super(route, camundaRestService);
      this.route = route;
      this.camundaRestService = camundaRestService;
  }
  onSubmit() {
    this.route.params.subscribe(params => {
      const processDefinitionKey = params['processdefinitionkey'];
      const variables = this.generateVariablesFromFormFields();
      this.camundaRestService.postProcessInstance(processDefinitionKey, variables).subscribe();
      this.submitted = true;
    });
  }
  generateVariablesFromFormFields() {
    const variables = {
      variables: { }
    };
    Object.keys(this.model).forEach((field) => {
      variables.variables[field] = {
        value: this.model[field]
      };
    });

    return variables;
  }
  showTasks() {
    this.submitted = false;
  }
}

