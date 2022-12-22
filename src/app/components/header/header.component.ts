import { ChangeDetectionStrategy, Component, DoCheck, Input } from '@angular/core';
import { IAuthRole, IAuthUser } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements DoCheck {
  _user: IAuthUser | null = null;
  roles: string[] = [''];

  constructor(public authService: AuthService) {}

  ngDoCheck(): void {
    this.user = this.authService.user;
  }

  set user(user: IAuthUser | null) {
    this._user = user;
    
    if (user !== null)
      this.roles = user.roles.map((role: IAuthRole) => role.name);
  }
  get user(): IAuthUser | null {
    return this._user;
  }

  logout() {
    this.authService.logout();
  }
}
