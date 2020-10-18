import {Ticket} from './ticket';
import {Role} from "./role";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  password: string;
  repeatedPassword: string;
  username: string;
  registrationDate: Date;
  email: string;
  telephone: string;
  locked: boolean;
  ticketList: Ticket[];
  role: Role[];
}
