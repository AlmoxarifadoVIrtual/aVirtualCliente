import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Router} from "@angular/router";

import {Produto} from "../Classes/produto";
import {ListaProdutoService} from "../Services/lista-produto.service";

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  @Input() produtos = Array<Produto>;
  @Output() borrado: EventEmitter<Produto> = new EventEmitter<Produto>();
  @Output() modificado: EventEmitter<Produto> = new EventEmitter<Produto>();

  displayProduto(produto : Produto) {
    console.log(produto);
  }

  removeProduto(model: Produto){
    this.produtoService.removeProduto(model).subscribe( o => {
      this.borrado.emit(model);
    }, e => {
      sessionStorage.removeItem('token');
      this.router.navigate(['login']);
    });
  }

  modificarProduto(model: Produto){
    this.modificado.emit(model);
      }

  constructor(private produtoService: ListaProdutoService, private router: Router) { }

  ngOnInit() {
  }

}
