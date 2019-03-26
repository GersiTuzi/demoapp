import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { template } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedStatus = false;
  constructor(private http: HttpClient) { }

  areCredentialsValid(username, password) {
    const params = 'username=' + username + '&password=' + password ;

    this.http.get<boolean>('http://localhost:8080/login?' + params).subscribe(data => this.loggedStatus = data );

    console.log('logged status : ' + this.loggedStatus);


  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  isLoggedIn(): boolean {
    return this.loggedStatus;
  }

  logout() {
    this.loggedStatus = false;
  }

}
