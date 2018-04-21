import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroFullComponent } from './cadastro-full/cadastro-full.component';
import { LoginFullComponent } from './login-full/login-full.component';

export const appRoutes: Routes = [
    {
        path: 'cadastro',
        component: CadastroFullComponent, data: {
            page: 'cadastro'
          }
    },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: LoginFullComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {
}