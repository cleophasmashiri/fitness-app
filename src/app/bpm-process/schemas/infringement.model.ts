import { InfringementType } from './infringement-type';
export class Infringement {

  constructor(
    public plateNumber: string,
    public infringementType: InfringementType,
    public infringementNotes: string,
    public driverSelects: string,
    public trafficAdminSelects: string,
    public driverNotes: string,
    public adminNotes: string,
    public driverIdNumber: string,
    public image1: string
  ) {  }

}
