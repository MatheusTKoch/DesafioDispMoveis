import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroEscolhaComponent } from './cadastro-escolha/cadastro-escolha.component';
import { CadastroVoluntarioComponent } from './cadastro-voluntario/cadastro-voluntario.component';
import { TelaVoluntarioComponent } from './tela-voluntario/tela-voluntario.component';
import { TelaInstituicaoComponent } from './tela-instituicao/tela-instituicao.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro-escolha', component: CadastroEscolhaComponent },
  { path: 'cadastro-voluntario', component: CadastroVoluntarioComponent },
  { path: 'tela-voluntario', component: TelaVoluntarioComponent },
  { path: 'tela-instituicao', component: TelaInstituicaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
