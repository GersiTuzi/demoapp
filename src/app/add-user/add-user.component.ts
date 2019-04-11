import { PersonService } from './../services/person.service';
import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  person: Person;
  constructor(private personService: PersonService) { }

  ngOnInit() {
  }
  submit() {
    this.personService.sendPerson(this.person);

  }
}
