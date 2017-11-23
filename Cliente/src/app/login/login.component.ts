import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

import { NgForm  } from "@angular/forms";
//import { Http } from "@angular/http";

@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

/**
  loginUser(e){
    e.preventDefault();
    console.log(e);
    let username = e.target.element[0].value;
    let passwordUser = e.target.element[1].value;
    console.log(username,passwordUser);
    return false;


  }
*/



  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.logincred, this.model.senha)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }

}
