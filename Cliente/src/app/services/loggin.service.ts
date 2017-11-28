import { Injectable } from '@angular/core';

import { Credencial} from "../interfaces/credencial";
import { Http, Headers, Response } from '@angular/http';



@Injectable()
export class LogginService {

  loggedIn: Boolean = false;
  header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    this.loggedIn = !! localStorage.getItem('auth_token');
  }

  login(login, senha){

    return this.http.post(
      'login', JSON.stringify({login, senha}), {headers : this.header}
    ).map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }
        return res.success;
      });

  }

  loggOut() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }


}
