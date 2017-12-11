import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CadastrarProdutoComponent} from "./cadastrar-produto/cadastrar-produto.component";
import {ListarProdutoComponent} from "./listar-produto/listar-produto.component";



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: CustomersComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrarP', component: CadastrarProdutoComponent},

  {path: 'findbylastname', component: SearchCustomersComponent},
  {path: 'listarProduto', component: ListarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
