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



  ngOnInit() {
  }

}
