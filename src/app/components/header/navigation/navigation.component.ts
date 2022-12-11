import { Component, DoCheck, Input } from '@angular/core';
import { AuthService, IUser } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  _user: IUser | null = null;

  @Input() set user(user: IUser | null) {
    this._user = user;
  }
  get user(): IUser | null {
    return this._user;
  }
}
