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
  sucesso: boolean = false;
  idProduto = 1;
  subimisaoProduto = false;

  cadastrarProduto(){
    this.sucesso = true;
    this.produto.id = this.idProduto;
    console.log(this.produto);
    this.produtoService.addProduto(this.produto);
    this.idProduto = this.idProduto +1;

  }

  editarId(){
    this.idProduto = this.idProduto +1;
  }

  newProduto(){
    this.sucesso = false;
    this.produto = new Produto();
    this.subimisaoProduto = false;

  }
  enviar(): void {
    this.sucesso = true;
  }

  private resetar (){
    this.produto.nome = null;
    this.produto.nome = "";
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
