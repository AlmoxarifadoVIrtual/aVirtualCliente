import { Component, OnInit } from '@angular/core';

import { TokenService } from "../token.service";
import { Angular2TokenService, A2tUiModule} from "angular2-token";

@Component({
  selector: 'app-access-resource',
  templateUrl: './access-resource.component.html',
  styleUrls: ['./access-resource.component.css']
})
export class AccessResourceComponent implements OnInit {

  output: any;

  constructor(private ttokenService: Angular2TokenService) { }

  // Submit Data to Backend
  onSubmit() {

    this.output = null;

    this.ttokenService.get('private_resource').subscribe(
      res => this.output      = res,
      error => this.output    = error
    );
  }

  ngOnInit() {
  }

}
