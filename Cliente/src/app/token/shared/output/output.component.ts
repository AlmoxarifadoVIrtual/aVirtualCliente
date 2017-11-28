import { Component, OnInit, Input } from '@angular/core';

import { Response } from "@angular/http";

import { Auth } from "../auth";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  output: Auth;

  @Input()
  set data(res: Response) {

    this.output = <Auth>{};

    if (res != null) {
      this.output.status = res.statusText + ' (' + res.status + ')';

      if (res.json().errors != null) {
        if (res.json().errors.full_messages != null) {
          this.output.errors = res.json().errors.full_messages;
        } else {
          this.output.errors = res.json().errors; }
      } else {
        this.output.data   = res.json().data;
      }
    }
  }

  ngOnInit() {
  }

}
