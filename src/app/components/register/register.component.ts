import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public register() {
    console.log(this.user);
    this.userService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['login']);
      }
    );
  }

}
