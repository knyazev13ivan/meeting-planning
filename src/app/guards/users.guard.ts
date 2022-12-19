import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IAuthRole } from '../interfaces';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.authService.user &&
      this.authService.user.roles.find(
        (role: IAuthRole) => role.name === 'ADMIN'
      )
    ) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}
