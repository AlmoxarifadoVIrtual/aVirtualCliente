import { Injectable } from '@angular/core';


import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'


@Injectable()
export class LogginService {

  public token: string;
  loggedIn: Boolean = false;
  header = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) {

   // this.loggedIn = !! localStorage.getItem('auth_token');
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;

  }

  login(login, senha): Observable<boolean>{
    console.log(JSON.stringify({login: login, senha: senha}));
    return this.http.post(
      'acesso', JSON.stringify({login: login, senha: senha}), {headers : this.header}
    ).map(response => {
      console.log('response do service loggin' + response.status.valueOf());
      console.log('response do service pra o token   ' + response.headers);

      let status = response.status.valueOf();

      //let token: string = response.json() && response.json().token;
      //console.log(token);
        if (status === 200) {
          this.loggedIn = true;
          // set token property
          //this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          //localStorage.setItem('currentUser', JSON.stringify({ login: login, token: token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });

  }

  loggOut() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
/*
  login(login, senha) {
    console.log(JSON.stringify({login: login, senha: senha}));
    console.log( this.header);

    return this.http.post(
      'login', JSON.stringify({login: login, senha: senha}), {headers : this.header}
    ).map(res => res.json())
      .map((res) => {
        let token = res.json() && res.json().token;
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }
        return res.success;
      });

  }
*/
}
