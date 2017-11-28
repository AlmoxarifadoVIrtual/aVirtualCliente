import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  constructor(private ttokenService: Angular2TokenService) {
    this.ttokenService.init();
  }

  ngOnInit() {
  }

}
