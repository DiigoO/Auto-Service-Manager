import { Component, OnInit } from '@angular/core';
import { Product } from '../../aggregates/autoService-new-product';
import { LoginProvider } from '../../provider/login/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  product : Product = new Product();

  constructor(private loginProvider : LoginProvider, public router: Router) { }

  ngOnInit() {
    // TODO: melhorar autenticação
    var authenticated = localStorage.getItem('isLoggedAutoServicesManagerTemp');
    if(authenticated == undefined || authenticated == "false") {
       this.router.navigate(['home']);
    }
  }

  cadastrarProduto() {
    console.log(this.product);
    debugger;
    var salvo;
    this.loginProvider.cadastrarProduto(this.product).subscribe(result=>(salvo = result));
    if(salvo) {
      alert("Produto salvo com sucesso!");
      this.product = new Product();
      this.product.nomeProduto = "";
      this.product.valor = "";
    }
    return false;
  }

}
