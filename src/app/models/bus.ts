import {Route} from "./route";

export class Bus {
  id: number;
  number: string;
  name: string;
  maxNumberOfPassengers: number;
  createDate: Date;
  VIN: string;
  currentlyUsed: boolean;
  busClass: string;
  route: Route[];
}
