import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { MaterialModule } from '../material-module/material.module';
import { TrainingComponent } from './training.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StopTrainingComponent } from './current-training/stop-training.component';



@NgModule({
  declarations: [
    NewTrainingComponent,
    PastTrainingComponent,
    CurrentTrainingComponent,
    TrainingComponent,
  ],
  imports: [
    CommonModule, MaterialModule,  FlexLayoutModule
  ]
})
export class TrainingModule { }
