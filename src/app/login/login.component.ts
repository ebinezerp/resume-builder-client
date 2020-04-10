import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.userService.login(this.username, this.password).subscribe(
      (user) => {
        console.log(user);
        this.router.navigate(['/template']);
      },
      (httpErrorResponse) => {
        console.log(httpErrorResponse);
        this.errorMessage = httpErrorResponse.error.message;
      }
    );
  }

}
