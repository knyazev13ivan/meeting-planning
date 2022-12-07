import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  email: string = 'admin1@mail.ru';
  password: string = 'password';
  user = this.authService.user;

  constructor(private authService: AuthService, private routes: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(() => {
      this.routes.navigate(['my-meetups']);
    });
  }

  logout() {
    this.authService.logout();
    this.user = null
  }
}
