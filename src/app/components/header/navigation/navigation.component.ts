import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IRole, IUser } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  _user: IUser | null = null;
  roles: string[] = [''];

  @Input() set user(user: IUser | null) {
    this._user = user;
    if (user !== null) this.roles = user.roles.map((role: IRole) => role.name);
  }
  get user(): IUser | null {
    return this._user;
  }
}
