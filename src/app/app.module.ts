import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginProvider } from '../provider/login/login';
import { BaseClient } from '../provider/base-client';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { MatCardModule } from '@angular/material'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CadastroComponent,
    LoginComponent,
    HeaderComponent,
    CadastroProdutoComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatCardModule
  ],
  exports: [RouterModule],
  providers: [LoginProvider, BaseClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
