import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../services/produto.service";
import {Produto} from "../interfaces/produto";

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  constructor( private produtoService: ProdutoService){

  }
  error = ''
  isAddProduto = true;
  produto = new Produto();
  subimisaoProduto = false;
  idProduto: number;

  cadastrarProduto(){
this.idProduto =+1;
this.produto.id = this.idProduto;
    console.log(this.produto);
    this.produtoService.addProduto(this.produto).subscribe( produto => {
        this.resetar();
      },
      error => this.error = <any>error);;

  }

  newProduto(){
    this.subimisaoProduto = false;
  }

  resetar (){
    this.produto.nome = null;
    this.produto.cor = null;
    this.produto.descricao = null;
    this.produto.observacao = null;
    this.produto.marca = null;
    this.produto.preco = null;
    this.produto.referencia = null;
    this.produto.unidadeDeMedida = null;
    this.produto.quantidade = null;


  }



  ngOnInit() {
  }


}
