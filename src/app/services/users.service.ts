import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import {
  IAddRoleDto,
  ICreateUserDto,
  IRole,
  IUpdateRoleDto,
  IUser,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl: string = `${environment.backendOrigin}/user`;
  users: IUser[] = [];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(this.usersUrl)
      .pipe(tap((users) => (this.users = users)));
  }

  addRole(role: IAddRoleDto): Observable<IRole> {
    return this.http.put<IRole>(`${this.usersUrl}/role`, role);
  }

  getRoles(roles: IUpdateRoleDto): Observable<IUpdateRoleDto> {
    return this.http.post<IUpdateRoleDto>(`${this.usersUrl}/role`, roles);
  }

  updateUser(user: ICreateUserDto, id: number): Observable<IUser> {
    return this.http.put<IUser>(`${this.usersUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.usersUrl}/${id}`);
  }
}
