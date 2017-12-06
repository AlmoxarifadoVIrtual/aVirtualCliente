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

  cadastrar(){

  }



  ngOnInit() {
  }


}
