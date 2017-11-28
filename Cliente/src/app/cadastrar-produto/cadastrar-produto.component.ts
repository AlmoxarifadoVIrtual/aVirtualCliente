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
