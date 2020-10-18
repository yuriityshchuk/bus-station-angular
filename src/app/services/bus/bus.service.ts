import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  public currentlyUsed(currentlyUser: boolean): Observable<any> {
    return this.http.get(`${this.baseUrl}/used?currentlyUsed=${currentlyUser}`);
  }
}
