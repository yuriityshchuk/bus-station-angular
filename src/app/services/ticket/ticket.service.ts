import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TicketDTO} from "../../models/dto/ticketDTO";
import {tick} from "@angular/core/testing";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  createTicketByMainInfo(ticketDTO: TicketDTO, numberOfPassengers: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/tickets/buy/${numberOfPassengers}`,
      ticketDTO,
    );
  }

  deleteTicketById(ticketId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tickets/${ticketId}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tickets/all`);
  }
}
