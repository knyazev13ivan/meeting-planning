import { Component, Output } from '@angular/core';
import { AuthService, IUser } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'meeting-planning';
  _user: IUser | null = null;

  constructor(public authService: AuthService) {}
  
  ngDoCheck(): void {
    this._user = this.authService.user
  }

  set user(user: IUser | null) {
    this._user = user;
  }
  get user(): IUser | null {
    return this._user;
  }
}
