import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Router} from "@angular/router";

import {ProdutoService} from "../services/produto.service";
import {Produto} from "../interfaces/produto";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  @Input() produtos = Array<Produto>();
  @Output() borrado: EventEmitter<Produto> = new EventEmitter<Produto>();
  @Output() modificado: EventEmitter<Produto> = new EventEmitter<Produto>();

    constructor(private produtoService: ProdutoService, private router: Router ) {

    }

    pro = this.produtoService.planos;

    produtosLista: any
    minhaListaProduto = this.produtoService.getAllProdutos().toArray;
  //minhaListaProduto = this.produtoService.getAllProdutos();


  getProduto(){

  }
  /*
  deletarItem(nome){

    for ( var i =0; i < this.produtosLista; i++ ){

      if( this.minhaListaProduto[i]["nome"] === nome ){
        this.minhaListaProduto.splice(i,1);
      }

    }

    this.minhaListaProduto.pop();

  }

  deletePPP(produto: Produto): void {
    //this.produto = this.produto.filter(h => h !== produto);
    //this.heroService.deleteHero(hero).subscribe();
  }

 */

  ngOnInit() {
    this.produtosLista = this.produtoService.getAllProdutos();
    console.log(" aqui é this.pro "+this.pro);
    console.log(" aqui é produto lista"+ this.produtosLista);
    console.log(" aqui é planos "+ this.produtosLista.planos);
  }

}
