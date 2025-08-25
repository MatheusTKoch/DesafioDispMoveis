import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CadastroVoluntarioPage } from './cadastro-voluntario/cadastro-voluntario.page';
import { CadastroInstituicaoPage } from './cadastro-instituicao/cadastro-instituicao.page';
import { SelecaoCadastroPage } from './selecao-cadastro/selecao-cadastro.page';
import { LoginInstituicaoPage } from './login-instituicao/login-instituicao.page';
import { LoginVoluntarioPage } from './login-voluntario/login-voluntario.page';
import { HomePage } from './home/home.page';
import { VagasInstituicaoComponent } from './vagas-instituicao/vagas-instituicao.component';
import { CadastroVagaComponent } from './cadastro-vaga/cadastro-vaga.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'selecao',
    component: SelecaoCadastroPage
  },
  {
    path: 'cadastro-voluntario',
    component: CadastroVoluntarioPage
  },
  {
    path: 'cadastro-instituicao',
    component: CadastroInstituicaoPage
  },
  {
    path: 'login-instituicao',
    component: LoginInstituicaoPage
  },
  {
    path: 'login-voluntario',
    component: LoginVoluntarioPage
  },
   {
    path: 'vagas-instituicao/:id',
    component: VagasInstituicaoComponent
  },
  { 
    path: 'cadastro-vaga/:id', 
    component: CadastroVagaComponent 
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
