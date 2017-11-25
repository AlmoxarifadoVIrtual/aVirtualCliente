import { Component, OnInit } from '@angular/core';

import { TokenService} from "../token.service";
import { Angular2TokenService, A2tUiModule } from "angular2-token";

@Component({
  selector: 'app-sign-in-oauth',
  templateUrl: './sign-in-oauth.component.html',
  styleUrls: ['./sign-in-oauth.component.css']
})
export class SignInOauthComponent implements OnInit {


  output: any;

  constructor(private ttokenService: Angular2TokenService) { }

  // Submit Data to Backend
  onSubmit() {

    this.output = null;

    this.ttokenService.signInOAuth('login');
  }

  ngOnInit() {
  }

}
