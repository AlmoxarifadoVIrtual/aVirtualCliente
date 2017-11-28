import { Component, OnInit } from '@angular/core';

import { Angular2TokenService, RegisterData} from "angular2-token";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData: RegisterData = <RegisterData>{};
  output: any;

  constructor(private ttokenService: Angular2TokenService) { }

  // Submit Data to Backend
  onSubmit() {

    this.output = null;

    this.ttokenService.registerAccount(this.registerData).subscribe(
      res => {
        this.registerData  = <RegisterData>{};
        this.output        = res;
      }, error => {
        this.registerData  = <RegisterData>{};
        this.output        = error;
      }
    );
  }

  ngOnInit() {
  }

}
