import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

export const appRoutes: Routes = [
    {
        path: 'cadastro',
        component: CadastroComponent, data: {
            page: 'cadastro'
          }
    },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: LoginComponent},
    {path: 'welcome', component: CadastroProdutoComponent, data: {page: 'cadastroProduto'}},
    {path: 'produtos', component: ListaProdutoComponent, data: {page: 'listaProduto'}},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {
}