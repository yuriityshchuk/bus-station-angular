import {Component, OnInit} from '@angular/core';
import {RoutesService} from '../../services/routes/routes.service';
import {Route} from '../../models/route';
import {MatDialog} from '@angular/material/dialog';
import {BuyInfoComponent} from '../buy-info/buy-info.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  routes: Route[] = [];
  numberOfPassengers: number;

  constructor(private routeService: RoutesService, private matDialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getByAllInfo();
  }

  public getByAllInfo() {
    this.routeService.getAllTrips(history.state.routes).subscribe(
      data => {
        console.log(data);
        this.routes = data;
      }
    );
  }

  public openBuyDialog(routeId: number) {

    if (this.matDialog.openDialogs.length === 0) {
      this.matDialog.open(BuyInfoComponent, {
        autoFocus: true,
        width: '600px',
        height: '600px',
        panelClass: 'mat-dialog-background',
        data: {
          route: this.routes.find(item => item.id === routeId),
          numberOfPassengers: history.state.routes.numberOfPassengers
        }
      });
    }
  }


}
