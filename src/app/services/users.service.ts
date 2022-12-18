import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import {
  IAddRoleDto,
  ICreateUserDto,
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

  addRole(role: IAddRoleDto) {
    this.http.put(`${this.usersUrl}/role`, role);
  }

  getRoles(roles: IUpdateRoleDto): Observable<IUpdateRoleDto> {
    return this.http.post<IUpdateRoleDto>(`${this.usersUrl}/role`, roles);
  }

  updateUser(user: ICreateUserDto, id: number) {
    this.http.put(`${this.usersUrl}/${id}`, user);
  }

  deleteUser(id: number) {
    this.http.delete(`${this.usersUrl}/${id}`);
  }
}
