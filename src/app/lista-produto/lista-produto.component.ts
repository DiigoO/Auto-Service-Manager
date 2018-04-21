import { Component, OnInit } from '@angular/core';
import { Product } from '../../aggregates/autoService-new-product';
import { LoginProvider } from '../../provider/login/login';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  listaProduto : Array<Product> = new Array<Product>();

  constructor(private loginProvider : LoginProvider) { }

  ngOnInit() {
    this.loginProvider.obterProdutos().subscribe(result=>(this.listaProduto = result));
  }

}
