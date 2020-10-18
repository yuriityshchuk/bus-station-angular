import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public user: User;
  oldPassword = '';
  newPassword = '';
  newEmail = '';
  errorMessage = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  private getLoggedInUser() {
    this.userService.getLoggedUser().subscribe(
      data => {
        console.log(data);
        this.user = data;
        console.log(this.user);
      }
    );
  }

  changePassword() {
    console.log("Old password: " + this.oldPassword);
    console.log("New password: " + this.newPassword);
    this.userService.changePassword(this.oldPassword, this.newPassword).subscribe(
      error => {
        console.log(error);
        this.errorMessage = error;
      }
    );
  }

  changeEmail() {
    console.log("New email: " + this.newEmail);

    this.userService.changeEmail(this.newEmail).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
