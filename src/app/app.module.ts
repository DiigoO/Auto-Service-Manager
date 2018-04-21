import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { LoginProvider } from '../provider/login/login';
import { BaseClient } from '../provider/base-client';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [LoginProvider, BaseClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
