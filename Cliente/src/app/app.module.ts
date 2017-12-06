import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomersComponent} from './customers/customers.component';
import {DataService} from './services/data.service';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import{ LoginComponent} from "./login/login.component";
import { HomeComponent} from "./home/home.component";
import {AuthenticationService} from "./services/authentication.service";
//import { AuthGuardGuard} from "./authGuard/auth-guard.guard";


import {SearchCustomersComponent} from './search-customers/search-customers.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import {LogginService} from "./services/loggin.service";
import {ProdutoService} from "./services/produto.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService, LogginService, AuthenticationService, ProdutoService],
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent,
    SearchCustomersComponent,
    LoginComponent,
    HomeComponent,
    CadastrarProdutoComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
