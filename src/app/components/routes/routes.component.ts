import {Component, OnInit} from '@angular/core';
import {City} from '../../models/city';
import {RoutesService} from '../../services/routes/routes.service';
import {Router} from "@angular/router";
import {RouteDTO} from "../../models/dto/routeDTO";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  cities: City[];
  currentDate: Date;
  route: RouteDTO = new RouteDTO();

  constructor(private routeService: RoutesService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.getAllCities();
  }

  private getAllCities(): void {
    this.routeService.getAllCities().subscribe(
      data => {
        console.log(data);
        this.cities = data;
      });
  }

  public search() {
    this.router.navigate(['/result'], {
      state: {
        routes: this.route,
      }
    });
  }
}
