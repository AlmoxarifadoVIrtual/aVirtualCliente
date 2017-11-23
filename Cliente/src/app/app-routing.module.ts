import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'customer', component: CustomersComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'findbylastname', component: SearchCustomersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
