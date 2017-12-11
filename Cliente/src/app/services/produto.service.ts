import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Produto} from "../interfaces/produto";

import { Http, Response, Headers, URLSearchParams, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {errorHandler} from "@angular/platform-browser/src/browser";
import { catchError, map, tap } from 'rxjs/operators';
import {normalizeMethodName} from "@angular/http/src/http_utils";


@Injectable()
export class ProdutoService {

  constructor(private router: Router , private http : Http) {

  }

  produto1 = {nome: 'coputador' , marca: 'dell', cor: 'preto',
    referencia: '002', quantidade: '3', descricao: 'produto novo muito bom'};

  produto2 = {nome: 'mesaDektop', marca: 'A melhor', cor: 'amarela',
    referencia: 'b002', quantidade: 10, descricao: 'mesas de alta qualidade'};

  minhaListaProduto = [this.produto1, this.produto2];


  produto: Produto;
  options = new Headers( {'Content-type': 'aplication/json'});

  isAddProduto: boolean = false;

  getIsAddProduto(){
    return this.isAddProduto;
  }

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get('api/produtos').map(response => response.json());
  }

  addProduto(nomeProduto,marcaProduto,corProduto,referenciaProduto,quantProduto,descricaoProduto): Observable<Produto>{
   let  body = {nome: nomeProduto, marca: marcaProduto, cor: corProduto,
   referencia: referenciaProduto, quantidade: quantProduto, descricao: descricaoProduto};

    return this.http.post('api/usuarios', JSON.stringify(body), {headers: this.options}).map( response => {
      let status = response.status.valueOf();
      if (status=== 200){
        this.isAddProduto = true;
      }
      else{
        return  this.handleError;
      }
    }).catch(this.handleError);
   // response.status).catch(this.handleError);


  }

  novoProduto(): void{
    this.isAddProduto = false;
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
