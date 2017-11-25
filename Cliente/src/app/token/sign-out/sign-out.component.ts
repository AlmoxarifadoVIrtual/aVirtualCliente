import { Component, OnInit } from '@angular/core';

import { TokenService} from "../token.service";
import { Angular2TokenService, A2tUiModule } from "angular2-token";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  output: any;

  constructor(private ttokenService: Angular2TokenService) { }

  // Submit Data to Backend
  onSubmit() {

    this.output = null;

    this.ttokenService.signOut().subscribe(
      res => this.output      = res,
      error => this.output    = error
    );
  }

  ngOnInit() {
  }
}
