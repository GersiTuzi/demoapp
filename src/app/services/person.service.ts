import { Person } from './../person.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiURL = 'http://localhost:8080/person?id=1';

  constructor(private http: HttpClient) { }



  getPerson() {
    return this.http.get<Person[]>(this.apiURL);
  }

  sendPerson(person: Person) {
    console.log(person);
    this.http.put<Person>('http://localhost:8080/putPerson', person).subscribe(data => console.log(data));
  }
}
