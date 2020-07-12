import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NewInfringementComponent } from './new-infringement.component';
import { DriverInfringementComponent } from './driver-infringement.component';
import { TrafficAdminInfringementComponent } from './traffic-admin-infringement.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  entryComponents: [NewInfringementComponent, DriverInfringementComponent, TrafficAdminInfringementComponent],
  declarations: [NewInfringementComponent, DriverInfringementComponent, TrafficAdminInfringementComponent],
  imports: [FormsModule, CommonModule, MaterialModule, FlexLayoutModule, RouterModule],
  exports: [NewInfringementComponent, DriverInfringementComponent, TrafficAdminInfringementComponent]
})
export class TrafficProcessModule {}

export { NewInfringementComponent } from './new-infringement.component';
export { DriverInfringementComponent } from './driver-infringement.component';
export { TrafficAdminInfringementComponent } from './traffic-admin-infringement.component';
