import { Component, OnInit } from '@angular/core';

import { Produto} from "../interfaces/produto";
import {normalizeMethodName} from "@angular/http/src/http_utils";

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  cadastroSucesso: Boolean = false;
  itens: Produto[];
  novoProduto: Produto;

  constructor() {
    this.novoProduto = new Produto;
  }

  cadastrarNovoProduto(){
    this.cadastroSucesso = true;
    console.log(this.novoProduto);

  }

  produtosCadastrados(): string{
    return JSON.stringify(this.itens);
  }

  ngOnInit() {
  }

}


import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {Produto} from "./Classes/produto";
import {ListaProdutoService} from "./Services/lista-produto.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  moduleId: module.id
})
export class AppComponent implements OnInit {
  produtos: Array<Produto> = [];
  produto: Produto = new Produto();// aqui colocava os elementos
  @ViewChild('modal')
  modal: ModalComponent;
  constructor(private produtoService: ListaProdutoService, private router: Router) {

  }

  ngOnInit() {
    this.produtoService.getProduto().subscribe(data => {
      this.produtos = data;
    }, e => {
      sessionStorage.removeItem('token');
      this.router.navigate(['/login']);
    });
  }

  salvar(model: Produto) {

    if (model.id === 0) {
      this.produtoService.addProduto(model).subscribe(data => {
        this.produtos.push(data);
      }, e => {
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
      });
    }
    else {
      this.produtoService.updateProduto(model).subscribe(data => { }, e => {
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
      });
    }

    this.modal.dismiss();


  }
  addProduto() {
    this.producto = new Produto('', '', 0,'','','','');
    this.modal.open();
  }
  //onBorrar
  excluir(model: Produto) {
    this.produtos.splice(this.produtos.indexOf(model), 1);
  }
  onModificar(model: Produto) {
    this.produto = model;
    this.modal.open();
  }

}
