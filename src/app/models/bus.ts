import {Route} from "./route";
import {Driver} from "./driver";

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
  driver: Driver[];
}
