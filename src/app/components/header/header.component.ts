import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(public authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {

    this.username = this.authenticationService.getAuthenticatedUser();
  }

  logoutUser(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.authenticationService.logout();
      this.router.navigate(['login']);
    }
  }
}
