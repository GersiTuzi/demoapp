import { Person } from '../models/person.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  constructor(private http: HttpClient) { }
  // TODO
  getPerson() {

    return this.http.get<Person>('');
  }

  async sendPerson(person: Person) {
    await this.http.put<Person>('http://localhost:8080/person', person).toPromise();
  }
}
