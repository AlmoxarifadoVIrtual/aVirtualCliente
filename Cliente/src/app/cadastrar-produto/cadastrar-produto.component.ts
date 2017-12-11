import { Component, OnInit } from '@angular/core';

import { Produto} from "../interfaces/produto";
import {ProdutoService} from "../services/produto.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  constructor(private router: Router, private produtoService: ProdutoService){

  }

  model: any = {};
  error = '';

  cadastrarProduto(){
    console.log(this.model.nomeProduto + this.model.descricaoProduto + this.model.quantProduto +
    this.model.corProduto + this.model.marcaProduto+ this.model.referenciaProduto);
    this.produtoService.addProduto(this.model.nomeProduto, this.model.marcaProduto, this.model.corProduto,
      this.model.referenciaProduto, this.model.quantProduto, this.model.descricaoProduto).subscribe( result =>{
        console.log(result);

    });

  }

  newProduto(){
    this.produtoService.novoProduto();
    this.router.navigate(['cadastrarP']);
  }



  ngOnInit() {
  }


}
