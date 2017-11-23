import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Credencial} from "../credencial";
import {DataService} from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  credential: Credencial[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // get credential from secure api end point
    this.dataService.getCredentials()
      .subscribe(credential => {
        this.credential = credential;
      });
  }

}
