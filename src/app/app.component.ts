import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { IAuthUser } from './interfaces';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'meeting-planning';
  _user: IAuthUser | null = null;

  constructor(public authService: AuthService) {}

  ngDoCheck(): void {
    this._user = this.authService.user;
  }

  set user(user: IAuthUser | null) {
    this._user = user;
  }
  get user(): IAuthUser | null {
    return this._user;
  }
}
