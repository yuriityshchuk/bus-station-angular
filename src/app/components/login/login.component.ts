import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'test';
  password = 'test';
  invalidLogin: boolean;
  errorMessage = 'Invalid Credentials';

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['route']);
    }
  }

  handleAuthLogin() {
    this.authenticationService.authenticate(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['route']);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }
}
