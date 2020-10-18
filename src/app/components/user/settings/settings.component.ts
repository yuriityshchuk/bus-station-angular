import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  oldPassword = '';
  newPassword = '';
  newEmail = '';
  errorMessage = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
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
