import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {TicketService} from '../../../services/ticket/ticket.service';

import {User} from '../../../models/user';

import {Ticket} from '../../../models/ticket';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public users: User[] = [];
  public tickets: Ticket[] = [];

  constructor(private userService: UserService, private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.getAllTickets();
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe(
      data => {
        console.log(data);
        this.users = data;
      }
    )
  }

  getAllTickets() {
    this.ticketService.getAll().subscribe(
      data => {
        console.log(data);
        this.tickets = data;
      }
    )
  }

  setTicketInActive(ticketId: number) {
    this.ticketService.deleteTicketById(ticketId).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      }
    );
  }

  deleteUserAccount(userId: number) {
    this.userService.deleteUserById(userId).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      }
    );
  }

  blockUser(userId: number) {
    this.userService.blockUser(userId).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      }
    )
  }
}
