import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ICreateRoleDto, IRole, IUpdateRoleDto } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  rolesUrl: string = `${environment.backendOrigin}/role`;
  roles: IRole[] = [];

  constructor(private http: HttpClient) {}

  getRoles(): Observable<IRole[]> {
    return this.http
      .get<IRole[]>(this.rolesUrl)
      .pipe(tap((roles) => (this.roles = roles)));
  }

  addRole(role: ICreateRoleDto) {
    this.http.put(`${this.rolesUrl}/role`, role);
  }

  updateRole(role: IUpdateRoleDto, id: number) {
    this.http.put(`${this.rolesUrl}/${id}`, role);
  }

  getRoleByName(name: string): Observable<IRole> {
    return this.http.get<IRole>(`${this.rolesUrl}/${name}`);
  }

  deleteRoleByName(name: string) {
    this.http.delete(`${this.rolesUrl}/${name}`);
  }
}
