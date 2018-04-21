import { Injectable, ApplicationRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import { BaseClient } from '../base-client';
import { LoginCredentials } from '../../aggregates/login-credentials';
import { NewUser } from '../../aggregates/autoService-new-users';
import { Product } from '../../aggregates/autoService-new-product';
import { Router } from '@angular/router';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginProvider {

  public session : any = {};
  public baseApi : string = 'core-login';
  private afterLoginSubjects : Subject<string>[] = [];
  
  constructor(public baseClient : BaseClient, public router: Router) {
    console.log('Hello LoginProvider Provider');
  }

  public login(credentials : LoginCredentials) : Observable<any> {
    let subject = new Subject<any>();
    this.baseClient.post([this.baseApi,'autoService'], credentials).subscribe(result =>{
      console.log(result);
      if(result != undefined && result) {
        localStorage.setItem('isLoggedAutoServicesManagerTemp', 'true');
        this.router.navigate(['welcome']);
      }
      else {
        localStorage.setItem('isLoggedAutoServicesManagerTemp', 'false');
        alert("Falha na autenticação do Usuario!");
      }
      subject.next(result);
    },
      error => {subject.error(error)}
    );
    return subject.asObservable();
  }

  public obterProdutos(credentials : LoginCredentials) : Observable<any> {
    let subject = new Subject<any>();
    this.baseClient.get([this.baseApi,'autoService', 'produtos', 'lista']).subscribe(result =>{
      console.log(result);
      if(result != undefined && result) {
        
      }
      else {
      }
      subject.next(result);
    },
      error => {subject.error(error)}
    );
    return subject.asObservable();
  }

  public createUser(newUser : NewUser) : Observable<any>{
    debugger;
    let subject = new Subject<any>();

    this.baseClient.post([this.baseApi,'autoService','cadastro'], newUser).subscribe(result =>{
      if(result != undefined && result) {
        alert("Usuario cadastrado com sucesso!");
      }
      else {
        alert("Ocorreu um erro ao cadastrar o Usuario!");
      }
      subject.next(result);
    },
      error => {subject.error(error)}
    );
    return subject.asObservable();
  }

  public cadastrarProduto(product : Product) : Observable<any>{

    let subject = new Subject<any>();

    this.baseClient.post([this.baseApi,'autoService', 'produto','cadastro'], product).subscribe(result =>{
      if(result != undefined && result) {
        alert("Produto cadastrado com sucesso!");
      }
      else {
        alert("Ocorreu um erro ao cadastrar o Produto!");
      }
      subject.next(result);
    },
      error => {subject.error(error)}
    );
    return subject.asObservable();
  }

  public loginFacebook(accessToken : string) : Observable<any> {
    let subject = new Subject<any>();
    this.baseClient.post([this.baseApi,'login','facebook'], null,{accessToken: accessToken}).subscribe(result =>{
      subject.next(result);
    },
      error => {subject.error(error)}
    );
    return subject.asObservable();
  }

  public loginGoogle(idToken : string) : Observable<any> {
    let subject = new Subject<any>();
    this.baseClient.post([this.baseApi,'login','google'], null, {idToken: idToken}).subscribe(result =>{
      subject.next(result);
    },
      error => {subject.error(error)}
    );
    return subject.asObservable();
  }

  private clearSessionCache(){
    this.session = {user:{}};
  }

}