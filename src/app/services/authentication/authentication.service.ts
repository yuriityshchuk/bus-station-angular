import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Role} from "../../models/role";

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';
export const ROLES = 'roles';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private baseUrl = 'http://localhost:8080';

  private roles: Role[];

  constructor(private http: HttpClient) {
  }

  authenticate(username, password) {
    return this.http.post<any>(
      `${this.baseUrl}/authenticate`, {
        username,
        password
      }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          sessionStorage.setItem(ROLES, JSON.stringify(data.roles));
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  public isUserAdmin(): boolean {
    this.roles = JSON.parse(sessionStorage.getItem(ROLES));
    if (this.isUserLoggedIn()) {
      return this.roles.some(x => x.name === 'ADMIN');
    }
  }
}
