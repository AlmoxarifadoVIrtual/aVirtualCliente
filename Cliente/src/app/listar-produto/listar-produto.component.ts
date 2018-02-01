import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Router} from "@angular/router";

import {ProdutoService} from "../services/produto.service";
import {Produto} from "../interfaces/produto";

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  @Input() produtos = Array<Produto>();
  @Output() borrado: EventEmitter<Produto> = new EventEmitter<Produto>();
  @Output() modificado: EventEmitter<Produto> = new EventEmitter<Produto>();

    constructor(private produtoService: ProdutoService, private router: Router) { }

  produto1 = {nome: 'coputador' , marca: 'dell', cor: 'preto',
    referencia: '002', quantidade: '3', descricao: 'produto novo muito bom'};

  produto2 = {nome: 'mesaDektop', marca: 'A melhor', cor: 'amarela',
    referencia: 'b002', quantidade: 10, descricao: 'mesas de alta qualidade'};

  //minhaListaProduto = [this.produto1, this.produto2];
  minhaListaProduto = this.produtoService.produtoLista;
  //minhaListaProduto = this.produtoService.getAllProdutos();


  deletarItem(nome){

    for ( var i =0; i < this.minhaListaProduto.length; i++ ){

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





  ngOnInit() {
  }

}
