import {Component} from '@angular/core';
import{LogginService} from "./services/loggin.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  constructor(private LogginSS: LogginService){

  }

}
