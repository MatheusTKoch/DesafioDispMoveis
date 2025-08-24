/*
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CadastroVoluntarioPage } from './cadastro-voluntario/cadastro-voluntario.page';
import { CadastroInstituicaoPage } from './cadastro-instituicao/cadastro-instituicao.page';

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
    path: 'cadastro-instituicao',
    loadComponent: () => import('./cadastro-instituicao/cadastro-instituicao.page').then(m => m.CadastroInstituicaoPage)
  },
  {
    path: 'cadastro-voluntario',
    loadChildren: () => import('./cadastro-voluntario/cadastro-voluntario.module').then( m => m.CadastroVoluntarioPageModule)
  },
  {
    path: 'cadastro-voluntario',
    component: CadastroVoluntarioPage
  },
  {
    path: 'cadastro-instituicao',
    component: CadastroInstituicaoPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CadastroVoluntarioPage } from './cadastro-voluntario/cadastro-voluntario.page';
import { CadastroInstituicaoPage } from './cadastro-instituicao/cadastro-instituicao.page';
import { SelecaoCadastroPage } from './selecao-cadastro/selecao-cadastro.page';
import { LoginInstituicaoPage } from './login-instituicao/login-instituicao.page';
import { LoginVoluntarioPage } from './login-voluntario/login-voluntario.page';
import { HomePage } from './home/home.page';

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
