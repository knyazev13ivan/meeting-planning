import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAuthRole, IAuthUser } from 'src/app/interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  _user: IAuthUser | null = null;
  roles: string[] = [''];

  @Input() set user(user: IAuthUser | null) {
    this._user = user;
    if (user !== null)
      this.roles = user.roles.map((role: IAuthRole) => role.name);
  }
  get user(): IAuthUser | null {
    return this._user;
  }
}
