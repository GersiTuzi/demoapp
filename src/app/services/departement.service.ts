import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departement } from '../models/departement.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

constructor(private http: HttpClient) { }
apiURL = 'http://localhost:8080/departement';

async putDepartement(departement: Departement) {

  await this.http.put<Departement>(this.apiURL, departement).toPromise();

}

getDepartements(): Promise<Departement[]> {
  return this.http.get<Departement[]>(this.apiURL).toPromise();
}

deleteDepartement(departement: Departement) {

  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: {
      id: departement.id,
      name: departement.name
    },
  };
  this.http.delete<Departement>('this.apiURL' , options).toPromise();
}

}
