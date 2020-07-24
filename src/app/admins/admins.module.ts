import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';



@NgModule({
  declarations: [DriversComponent, VehiclesComponent, VehicleEditComponent, DriverEditComponent],
  imports: [
    CommonModule
  ]
})
export class AdminsModule { }
