import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { LogginService} from "../services/loggin.service";
import { Router } from "@angular/router";
import {Credencial} from "../interfaces/credencial";


@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private logginS: LogginService ,private router: Router ) { }

  model: any = {};
  error = '';

  onSubmitLogin() {
    console.log(this.model.loginCred + this.model.senha);
    this.logginS.login( this.model.loginCred , this.model.senha ).subscribe((result) => {
      if ( result === true ){
        this.router.navigate(['home']);
      }else{
        this.error = 'Username or password is incorrect';

      }
    });
  }


  ngOnInit() {
    this.logginS.loggOut();
    }



}
