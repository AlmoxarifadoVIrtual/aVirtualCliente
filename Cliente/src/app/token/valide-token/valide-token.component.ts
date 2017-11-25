import { Component, OnInit } from '@angular/core';

import {TokenService} from "../token.service";
import { Angular2TokenService, A2tUiModule } from "angular2-token";

@Component({
  selector: 'app-valide-token',
  templateUrl: './valide-token.component.html',
  styleUrls: ['./valide-token.component.css']
})
export class ValideTokenComponent implements OnInit {

  output: any;

  constructor(private ttokenService: Angular2TokenService) { }

  onSubmit() {

    this.output = null;
    this.ttokenService.validateToken().subscribe(

      res => this.output    = res, error => this.output = error);

  }

  ngOnInit() {
  }
}
