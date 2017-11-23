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
import { TokenComponent } from './token/token.component';
import { ValideTokenComponent } from './token/valide-token/valide-token.component';
import { SignOutComponent } from './token/sign-out/sign-out.component';
import { SignInComponent } from './token/sign-in/sign-in.component';
import { SignInOauthComponent } from './token/sign-in-oauth/sign-in-oauth.component';
import { OutputComponent } from './token/shared/output/output.component';
import { RegisterComponent } from './token/register/register.component';
import { ChangePasswordComponent } from './token/change-password/change-password.component';
import { AccessResourceComponent } from './token/access-resource/access-resource.component';
import {TokenService} from "./token/token.service";
import {Angular2TokenService, A2tUiModule } from "angular2-token";



@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent,
    SearchCustomersComponent,
    LoginComponent,
    HomeComponent,
    TokenComponent,
    ValideTokenComponent,
    SignOutComponent,
    SignInComponent,
    SignInOauthComponent,
    OutputComponent,
    RegisterComponent,
    ChangePasswordComponent,
    AccessResourceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    A2tUiModule
  ],
  providers: [DataService, AuthGuardGuard, AuthenticationService, TokenService, Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
