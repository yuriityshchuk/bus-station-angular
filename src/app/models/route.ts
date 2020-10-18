import {City} from './city';
import {Ticket} from './ticket';
import {Bus} from "./bus";

export class Route {
  id: number;
  arrivalDate: Date;
  arrivalPlace: City;
  departureDate: Date;
  departurePlace: City;
  numberOfPassengers: 20;
  ticket: Ticket[];
  bus: Bus[];
}
