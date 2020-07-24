import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';
import { Infringement } from '../../schemas/infringement.model';
import { InfringementType } from '../../schemas/infringement-type';
import { StartProcessInstanceComponent } from '../general/start-process-instance.component';

@Component({
  selector: 'new-infringement',
  templateUrl: './new-infringement.component.html',
  styleUrls: ['./new-infringement.component.scss']
})
export class NewInfringementComponent extends StartProcessInstanceComponent {
  submitted: boolean = false;
  model = new Infringement('', InfringementType.Other, '', '', '', '', '', '', '');
  private fileToUpload: File = null;
  private SUCCESS: boolean = false;
  
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
  onFileComplete(data: any) {
    console.log(data);
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
  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }
  uploadFileToActivity() {
    this.toBase64(this.fileToUpload)
    .then((res: string) => this.model.image1 = res);
  }
}

