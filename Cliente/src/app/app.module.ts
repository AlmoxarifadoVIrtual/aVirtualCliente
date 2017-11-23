import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomersComponent} from './customers/customers.component';
import {DataService} from './data.service';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import{ LoginComponent} from "./login/login.component";
import { HomeComponent} from "./home/home.component";
import {AuthenticationService} from "./authentication.service";
import { AuthGuardGuard} from "./authGuard/auth-guard.guard";

import {enableProdMode} from '@angular/core';
import {SearchCustomersComponent} from './search-customers/search-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent,
    SearchCustomersComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService, AuthGuardGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
