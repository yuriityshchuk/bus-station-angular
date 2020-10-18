import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Route} from "../../models/route";
import {TicketService} from "../../services/ticket/ticket.service";
import {TicketDTO} from "../../models/dto/ticketDTO";
import {AUTHENTICATED_USER} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buy-info',
  templateUrl: './buy-info.component.html',
  styleUrls: ['./buy-info.component.css']
})
export class BuyInfoComponent implements OnInit {

  routeInfo: Route = new Route();
  email: string;
  ticketDTO: TicketDTO = new TicketDTO();
  numberOfPassengers: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ticketService: TicketService,
              private dialogRef: MatDialogRef<BuyInfoComponent>, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.data.route);
    this.routeInfo = this.data.route;
    this.numberOfPassengers = this.data.numberOfPassengers;
  }

  buyTicket() {
    this.ticketDTO.email = this.email;
    this.ticketDTO.username = sessionStorage.getItem(AUTHENTICATED_USER);
    this.ticketDTO.route = this.routeInfo;

    this.ticketService.createTicketByMainInfo(this.ticketDTO, this.numberOfPassengers).subscribe(
      data => {
        console.log(data);
      }
    );
    this.router.navigate(['/user-page']);
    this.dialogRef.close();
  }

}
