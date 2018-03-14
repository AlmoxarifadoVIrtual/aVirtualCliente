import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Produto} from "../interfaces/produto";
import {HttpClient} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {LogginService} from "./loggin.service";
import 'rxjs/add/operator/map';
import {ConfigService} from "../config-service";
import { Produto} from "../interfaces/produto";

@Injectable()
export class ProdutoService {



  planos : any;
  isAddProduto: boolean = false;
  headers = new Headers({'Content-Type': 'application/json','chave': localStorage.getItem('chave')});
  options = new RequestOptions({headers: this.headers});
  url = this.urlConfig.getUrlService();
  erro:any;

  constructor(private router: Router , private http: HttpClient, private loggin: LogginService, private ptth: Http,
              private urlConfig: ConfigService) {

  }

  getIsAddProduto(){
    return this.isAddProduto;
  }


  // metodo pra retornar os produtos
  getAllProdutos(): Observable<Array<Produto>>{

    console.log("antes de entrar no htttp   este é o header"+ this.options.headers.get('chave'));

    return this.ptth.get(this.url+'/produtos/listar', this.options)
      .map(response => {
        let result = response.status.valueOf();
        console.log("depois do htttp");
        console.log(result);
        if( result === 200){
          console.log(response.text());
          return response.json();
        }
      });

  }

  getDosProduto(): Observable<Produto[]>{
    console.log("aqui é o headers  "+this.headers.get('chave'));
    console.log("aqui é o header key"+ this.headers.keys().toString());
    return this.http.get(this.url+"/produtos/listar", this.headers.get('chave').toString())
      .map(this.extractData);
     // .catch(this.handleErrorObservable);
  }

  addProduto(produto: Produto): Promise<Produto>{
    
   this.isAddProduto = true;
    return this.http.post(this.url+'/produtos', (produto), options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
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

  private extractObject(res: Response): Object {
    const data: any = res.json();
    return data || {};
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);

  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
  }




}
