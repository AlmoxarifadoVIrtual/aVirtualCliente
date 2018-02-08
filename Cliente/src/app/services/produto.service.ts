import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Produto} from "../interfaces/produto";
import {HttpClient} from '@angular/common/http';
import{ Subscription} from "rxjs/Subscription";

import { Http, Response, Headers, URLSearchParams, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {LogginService} from "./loggin.service";
import {catchError} from "rxjs/operators";


@Injectable()
export class ProdutoService {

  //planos: Object[] = [];
  planos : any;

  ustomersObservable : Observable<Produto[]>;
  constructor(private router: Router , private http: HttpClient, private loggin: LogginService, private ptth: Http) {

    this.planos = this.http.get<Produto>('produtos/listar',this.options.headers.get('x-access-token')).map(res => Array);
  }


/*
  produto1 = {nome: 'coputador' , marca: 'dell', cor: 'preto',
    referencia: '002', quantidade: '3', descricao: 'produto novo muito bom'};

  produto2 = {nome: 'mesaDektop', marca: 'A melhor', cor: 'amarela',
    referencia: 'b002', quantidade: 10, descricao: 'mesas de alta qualidade'};

  produtoLista = [this.produto1,this.produto2];
 // produtosArrr = Array<Produto>();
  dataList = [];

*/

  isAddProduto: boolean = false;
  headers = new Headers({'Content-Type': 'application/json','Authorization': 'x-access-token'});
  options = new RequestOptions({headers: this.headers});
  erro:any;

  getIsAddProduto(){
    return this.isAddProduto;
  }


  getAllProdutos(): Observable<Produto[]>{
    this.headers.set('x-access-token', localStorage.getItem('token'));
    return this.http.get<Produto[]>('produtos/listar',this.options.headers.get('x-access-token'));
  }

  addProduto(nomeProduto,marcaProduto,corProduto,referenciaProduto,quantProduto,descricaoProduto): Observable<Produto>{


   let  body = {nomeProduto: nomeProduto, marcaProduto: marcaProduto, corProduto: corProduto,
   referenciaProduto: referenciaProduto, quantProduto: quantProduto, descricaoProduto: descricaoProduto};

   console.log(nomeProduto)

   //this.produtoLista.push({nome:nomeProduto , marca: marcaProduto, cor: corProduto,
   //  referencia: referenciaProduto, quantidade: quantProduto, descricao: descricaoProduto});

   this.isAddProduto = true;
   //this.options.headers.get('x-access-token')
    this.headers.set('x-access-token', localStorage.getItem('token'));

    console.log("aqui é o header de x-access " +this.options.headers.get('x-access-token'))
    return this.http.post('/produtos', body,this.options.headers.get('x-access-token'))
      .pipe(catchError(error => this.erro = error));
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
