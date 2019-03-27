import { AuthService } from './../services/auth.service';

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) {}

  ngOnInit() {

  }

  async loginUser(event) {


    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    await this.Auth.areCredentialsValid(username, password);


    if (await this.Auth.isLoggedIn() === true) {
      this.router.navigate(['home']);

    } else {
      window.alert('Wrong credentials');
    }

    }


  }

