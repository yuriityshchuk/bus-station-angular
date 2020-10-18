import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../authentication/authentication.service";
import {Observable} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  public getLoggedUser(): Observable<any> {
    if (this.authenticationService.isUserLoggedIn()) {
      return this.http.get(`${this.baseUrl}/users/logged-user`);
    }
  }

  public changePassword(oldPassword, newPassword): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/change-password`, {
      oldPassword,
      newPassword
    });
  }

  public changeEmail(newEmail): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/change-email`, {
      newEmail
    });
  }

  public getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/all`);
  }

  public register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, user);
  }

  public deleteUserById(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${userId}`);
  }

  public blockUser(userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/block/${userId}`, []);
  }
}
