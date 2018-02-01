import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Produto} from "../interfaces/produto";
import { HttpClient } from '@angular/common/http';
import{ Subscription} from "rxjs/Subscription";

import { Http, Response, Headers, URLSearchParams, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ProdutoService {

  constructor(private router: Router , private http : HttpClient) {

  }



  produto1 = {nome: 'coputador' , marca: 'dell', cor: 'preto',
    referencia: '002', quantidade: '3', descricao: 'produto novo muito bom'};

  produto2 = {nome: 'mesaDektop', marca: 'A melhor', cor: 'amarela',
    referencia: 'b002', quantidade: 10, descricao: 'mesas de alta qualidade'};

  produtoLista = [this.produto1,this.produto2];
 // produtosArrr = Array<Produto>();
  dataList = [];

  //options = new Headers( {'Content-type': 'aplication/json'});

  isAddProduto: boolean = false;

  getIsAddProduto(){
    return this.isAddProduto;
  }


  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('/listar');
  }

  addProduto(nomeProduto,marcaProduto,corProduto,referenciaProduto,quantProduto,descricaoProduto){

   let  body = {nomeProduto: nomeProduto, marcaProduto: marcaProduto, corProduto: corProduto,
   referenciaProduto: referenciaProduto, quantProduto: quantProduto, descricaoProduto: descricaoProduto};

   console.log(nomeProduto)

   this.produtoLista.push({nome:nomeProduto , marca: marcaProduto, cor: corProduto,
     referencia: referenciaProduto, quantidade: quantProduto, descricao: descricaoProduto});

   this.isAddProduto = true;

    return this.http.post('/produtos', body).subscribe( data => console.log(data));


  }

  novoProduto(): void{
    this.isAddProduto = false;
  }

  deleteProduto(produtoId: string, quantidade: number): Observable<Produto>{

    return this.http.delete('/produtos' +'/' + produtoId+ '/' + quantidade).map( response => console.log(response))
      .catch(this.handleError);
  }

  atuliazarProduto(produto: Produto): Observable<Produto>{
    let  body = {nome: produto.nomeProduto, marca: produto.marcaProduto, cor: produto.corProduto,
      referencia: produto.referenciaProduto, quantidade: produto.quantProduto, descricao: produto.descricaoProduto};

    return this.http.put('api/produto'+ '/' + produto.id, body).map( sucess =>
     sucess.valueOf()).catch(this.handleError);
  }

  getProdutoID(produtoId: string): Observable<Produto>{
    return this.http.get('api/produto' + '/' + produtoId).map(response =>
    response.valueOf()).catch(this.handleError);

  }


  private handleError (error: Response | any) {
    console.log(error.message);
    return Observable.throw(error.status);
  }

  ngOnInit() {
  }




}
