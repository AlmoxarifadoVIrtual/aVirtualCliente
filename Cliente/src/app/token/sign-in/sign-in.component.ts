import { Component, OnInit } from '@angular/core';

import {TokenService} from "../token.service";
import { Angular2TokenService, A2tUiModule } from "angular2-token";
import { SignInData } from 'angular2-token';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInData: SignInData = <SignInData>{};
  output: any;

  constructor(private ttokenService: Angular2TokenService) { }

  // Submit Data to Backend
  onSubmit() {

    this.output = null;

    this.ttokenService.signIn(this.signInData).subscribe(
      res => {
        this.signInData     = <SignInData>{};
        this.output         = res;
      }, error => {
        this.signInData     = <SignInData>{};
        this.output         = error;
      }
    );
  }

  ngOnInit() {
  }

}
