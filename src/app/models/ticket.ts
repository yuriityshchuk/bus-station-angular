import {User} from './user';
import {Route} from './route';

export class Ticket {
  id: number;
  buyTime: Date;
  status: string;
  clientEmail: string;
  user: User;
  route: Route;
}
