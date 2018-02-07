import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, } from '@angular/http';
import 'rxjs/add/operator/map';
import {ChaveTService} from "./chave-t.service";
import {Observable} from "rxjs/Observable";
import {LoginCC} from "../interfaces/credencial";
import {HttpClient} from "@angular/common/http";
import {stringify} from "@angular/core/src/util";
import {jsonpCallbackContext} from "@angular/common/http/src/module";



@Injectable()
export class LogginService {

  constructor(private http: Http, private chaveH: ChaveTService, private htt: HttpClient) {
  }

  chave: any;
  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});
  loginStatus = false;
  funcaoUser:any;

  login(login, senha) {

    console.log(JSON.stringify({login: login, senha: senha}));

    return this.http.post('acesso', JSON.stringify({login: login, senha: senha}), this.options
    ).map((response) => {

      let status = response.status.valueOf();
      // aqui ta a key
      console.log(response.text());

      if (status === 200) {
        this.chave = response.text();
        localStorage.setItem('token', this.chave );
        //console.log(" aqui é o local storage  "+localStorage.getItem('token'));
        this.headers.set('x-access-token',  this.chave );
        //console.log("aqui é o header " + this.headers.get('x-access-token'));
        this.loginStatus = true;

        return this.chave;
        // return true to indicate successful login

      } else {
        console.log("nada ainda");
        // return false to indicate failed login

      }

    });
  }

  funcaoExercida() {
    return this.http.get('acesso', this.headers.get('x-access-token')).map(result =>{
      this.funcaoUser = result.text();
      console.log('o cara é ' + this.funcaoUser);
      return this.funcaoUser;

    });
  }

  loggOut(){
    this.http.delete('acesso', this.headers.get('x-access-token'));
    this.headers.set('x-access-token', '' );
    this.loginStatus= false;
    localStorage.removeItem('token');
    console.log( "aqui é o header apagado " + this.headers.get('x-access-token'));
    console.log(" aqui é o local storage   apagado "+localStorage.getItem('token'));

  }

  getLogado(){
    return this.loginStatus;
  }

}
