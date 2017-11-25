import { Component, OnInit } from '@angular/core';

import { TokenService } from "../token.service";
import { Angular2TokenService, A2tUiModule, UpdatePasswordData} from "angular2-token";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  updatePasswordData: UpdatePasswordData = <UpdatePasswordData>{};
  output:             any;

  constructor(private ttokenService: Angular2TokenService) { }

  // Submit Data to Backend
  onSubmit() {

    this.output = null;

    this.ttokenService.updatePassword(this.updatePasswordData).subscribe(
      res => {
        this.updatePasswordData    = <UpdatePasswordData>{};
        this.output                = res;
      }, error => {
        this.updatePasswordData    = <UpdatePasswordData>{};
        this.output                = error;
      }
    );
  }

  ngOnInit() {
  }

}
