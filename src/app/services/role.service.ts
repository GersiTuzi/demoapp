import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  putRole(role: Role): Promise<Role> {

    return this.http.put<Role>('http://localhost:8080/roles', role).toPromise();

  }

  getRoles(): Promise<Role[]> {
    return this.http.get<Role[]>('http://localhost:8080/roles').toPromise();
  }

   deleteRole(role: Role): Promise<Role> {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: role.id,
        name: role.name
      },
    };
    return this.http.delete<Role>('http://localhost:8080/roles' , options).toPromise();
  }
}
