import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RouteDTO} from "../../models/dto/routeDTO";
import {Route} from "../../models/route";

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getAllCities(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cities/getAll`);
  }

  getAllTrips(route: RouteDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/routes/search`, route);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}routes/all`);
  }

  deleteByRouteId(routeId: number) {
    return this.http.delete(`${this.baseUrl}routes/${routeId}`);
  }

  updateRoute(route: Route) {
    return this.http.put(`${this.baseUrl}/routes/${route.id}`, route);
  }

  saveRoute(route: Route) {
    return this.http.post(`${this.baseUrl}/routes/${route.id}`, route);
  }

  getById(routeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/routes/${routeId}`);
  }


}
