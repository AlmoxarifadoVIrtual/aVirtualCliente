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
        console.log(" aqui é o local storage  "+localStorage.getItem('token'));
        this.headers.set('x-access-token',  this.chave );
        console.log("aqui é o header " + this.headers.get('x-access-token'));
        return this.chave;
        // return true to indicate successful login

      } else {
        console.log("nada ainda");
        // return false to indicate failed login

      }

    });
  }

  funcaoUser(){
    return this.http.get('acesso', this.headers.get('x-access-token'));
  }

  loggOut(){
    this.http.delete('acesso', this.headers.get('x-access-token'));
    this.headers.set('x-access-token','' );
    localStorage.removeItem('token');
    //console.log( "aqui é o header apagado " + this.headers.get('x-access-token'));
    //console.log(" aqui é o local storage   apagado "+localStorage.getItem('token'));

  }

/*

 loginN(login, senha){
     return this.http.post( 'acesso', JSON.stringify({login: login, senha: senha}), this.headers()
    ).map( response => this.data = response.json()).subscribe(() => console.log('sucesso'));

  }

  headers(){
    let headersParametro = {'Content-Type': 'aplication/json'};
    if( localStorage['token']){
      headersParametro['Authorization'] = localStorage['token'];
    }
    let headers = new Headers(headersParametro);
    let options =  new RequestOptions({headers: headers});

    return options;
  }


 */


  /*
  login(login, senha) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    console.log(JSON.stringify({login: login, senha: senha}));

    return this.http.post( 'acesso', JSON.stringify({login: login, senha: senha}), options
      ).map((response: Response) =>  {

      let status = response.status.valueOf();

      if (status === 200) {
        this.loggedIn = true;
        // return true to indicate successful login
        return true;
      } else {
        // return false to indicate failed login
        return false;
      }

    });


  }
   */


}
