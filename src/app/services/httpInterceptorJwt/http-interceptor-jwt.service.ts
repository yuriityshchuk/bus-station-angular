import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorJwtService implements HttpInterceptor {

  constructor(private  authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    const jwtAuthHeader = this.authenticationService.getAuthenticatedToken();
    const username = this.authenticationService.getAuthenticatedUser();
    console.log(jwtAuthHeader);

    if (jwtAuthHeader && username) {
      request = request.clone({
        setHeaders: {
          Authorization: jwtAuthHeader
        }
      });
    }
    return next.handle(request);
  }
}
