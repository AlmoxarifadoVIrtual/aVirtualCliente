import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LogginService} from "../services/loggin.service";
import { Router } from "@angular/router";
import { LoginCC} from "../interfaces/credencial";


@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private logginS: LogginService , private router: Router ) { }

  model: any = {};
  error: string;
  token = '';
  logado = false;
/*
  onSubmitLogi() {

    console.log(this.model.loginCred + this.model.senha);
    this.logginS.login( this.model.loginCred , this.model.senha )
      .subscribe(
        login => this.processarLogin(login),
        error => this.error = error);

  }

  processarLogin(login: LoginCC){
    localStorage['token'] = login.id;
    this.router.navigate(['home']);

  }

  ngOnInit() {
    this.logado = false;
    this.logginS.loggOut();
    }
*/
  onSubmitLogin(loginUsuario, senhaUsuario) {
    console.log(this.model.loginCred + this.model.senha);
    this.logginS.login(this.model.loginCred, this.model.senha).subscribe((result) => {
      console.log(result);
      let v = result.valueOf();
      console.log(v);
      if (result.length > 0) {
        this.logado = true;
        console.log(this.logado+ " este é this.logadooo");
        this.router.navigate(['home']);
      } else {
        this.error = 'Username or password is incorrect';

      }
    });
  }

  logoutUser(){
    this.logginS.loggOut();
    if (localStorage.getItem('token')=== ''){
      this.router.navigate(['login']);
    }
    else{
      console.log('nao removeu o storage' + localStorage.getItem('token'));
    }

  }

   userFunção(){
    console.log(this.logginS.funcaoUser());


  }



/*
onSubmitLogin() {
    console.log(this.model.loginCred + this.model.senha);
    this.logginS.login( this.model.loginCred , this.model.senha ).subscribe((result) => {
      console.log(result);
      let v = result.valueOf();
      console.log(v);
      if ( this.logginS.loggedIn === true ){
        this.logado = true;
        this.router.navigate(['home']);
      }else{
        this.error = 'Username or password is incorrect';

      }
    });
  }
 */

  ngOnInit() {
  }
}
