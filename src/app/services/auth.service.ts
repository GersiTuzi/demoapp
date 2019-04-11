import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedStatus = true; // Set false in prod
  constructor(private http: HttpClient) { }

  async areCredentialsValid(username, password) {
    const params = 'username=' + username + '&password=' + password;
    this.loggedStatus = await this.http.get<boolean>('http://localhost:8080/login?' + params).toPromise();

  }

  isLoggedIn(): boolean {
    return this.loggedStatus;
  }

  logout() {
    this.loggedStatus = false;
  }

}
