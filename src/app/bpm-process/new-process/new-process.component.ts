import { Component, OnInit } from '@angular/core';
import { CamundaRestService } from '../camunda-rest.service';

@Component({
  selector: 'app-new-process',
  templateUrl: './new-process.component.html',
  styleUrls: ['./new-process.component.scss']
})
export class NewProcessComponent implements OnInit {
  private fileToUpload: File = null;
  private SUCCESS: boolean = false;
  
  constructor(private camundaRestService: CamundaRestService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.camundaRestService.deployProcess(this.fileToUpload).subscribe(data => {
      this.SUCCESS = true;
      }, error => {
        console.log(error);
    });
  }
}