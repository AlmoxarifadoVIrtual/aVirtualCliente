import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Produto} from "../interfaces/produto";

import { Http, Response, Headers, URLSearchParams, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {errorHandler} from "@angular/platform-browser/src/browser";
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ProdutoService {

  constructor(private router: Router , private http : Http) {

  }
  produto: Produto;
  options = new Headers( {'Content-type': 'aplication/json'});

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get('api/produtos').map(response => response.json());
  }

  addProduto(produto: Produto): Observable<Produto>{
   let  body = {nome: produto.nomeProduto, marca: produto.marcaProduto, cor: produto.corProduto,
   referencia: produto.referenciaProduto, quantidade: produto.quantProduto, descricao: produto.descricaoProduto};

    return this.http.post('api/usuarios', body, {headers: this.options}).map( response =>
    response.status).catch(this.handleError);
  }

  deleteProduto(produtoId: string): Observable<Produto>{

    return this.http.delete('api/usuario' +'/' + produtoId).map( response => response.status)
      .catch(this.handleError);
  }

  atuliazarProduto(produto: Produto): Observable<Produto>{
    let  body = {nome: produto.nomeProduto, marca: produto.marcaProduto, cor: produto.corProduto,
      referencia: produto.referenciaProduto, quantidade: produto.quantProduto, descricao: produto.descricaoProduto};

    return this.http.put('api/produto'+ '/' + produto.id, body, {headers: this.options} ).map( sucess =>
     sucess.status).catch(this.handleError);
  }

  getProdutoID(produtoId: string): Observable<Produto>{
    return this.http.get('api/produto' + '/' + produtoId).map(response =>
    response.json()).catch(this.handleError);

  }


  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

  ngOnInit() {
  }




}
