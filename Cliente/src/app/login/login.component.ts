import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { LogginService} from "../services/loggin.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private logginS: LogginService ,private router: Router ) { }

  onSubmitLogin(login, senha) {
    this.logginS.login( login, senha ).subscribe((result) => {
      if ( result ){
        this.router.navigate(['home']);
      }
    });
  }


  ngOnInit() {

  }



}
