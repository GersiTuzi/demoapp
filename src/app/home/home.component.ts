import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: Person = {
    id: 0,
    lastName: '',
    firstName: '',
    address: '',
    city: ''
  };
  title = 'timesheet-app';
  persons$: Person [] ;
  constructor(private svc: PersonService) {

  }
  getPerson() {

    return this.svc.getPerson().subscribe((response) => console.log(response));
  }
  sendPerson() {

    this.svc.sendPerson(this.person);
  }

  ngOnInit() {
   return this.svc.getPerson().subscribe(data => this.persons$ = data);

  }
}
