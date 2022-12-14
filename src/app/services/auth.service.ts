import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { IAuthUser } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = `${environment.backendOrigin}/auth`;
  _user: IAuthUser | null = null;

  constructor(private http: HttpClient, private routes: Router) {}

  parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get user(): any {
    const token = this.token;

    if (token) {
      this._user = this.parseJwt(token);
      return this._user;
    }
    return null;
  }

  public get token(): string | null {
    const token = localStorage.getItem('del_meetups_auth_token');
    return token;
  }

  login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map((res) => {
          if (res.token) {
            localStorage.setItem('del_meetups_auth_token', res.token);
          }
          return null;
        })
      );
  }

  logout() {
    localStorage.removeItem('del_meetups_auth_token');
    this._user = null;
    this.routes.navigate(['auth/login']);
  }
}
