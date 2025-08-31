import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard';

import { CadastroVoluntarioPage } from './cadastro-voluntario/cadastro-voluntario.page';
import { CadastroInstituicaoPage } from './cadastro-instituicao/cadastro-instituicao.page';
import { SelecaoCadastroPage } from './selecao-cadastro/selecao-cadastro.page';
import { VagasInstituicaoComponent } from './vagas-instituicao/vagas-instituicao.component';
import { CadastroVagaComponent } from './cadastro-vaga/cadastro-vaga.component';
import { VagasVoluntarioComponent } from './vagas-voluntario/vagas-voluntario.component';
import { AlterarDadosInstituicaoPage } from './alterar-dados-instituicao/alterar-dados-instituicao.page';
import { AlterarDadosVoluntarioPage } from './alterar-dados-voluntario/alterar-dados-voluntario.page';


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
    path: 'vagas-instituicao/:id',
    component: VagasInstituicaoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-vaga/:id',
    component: CadastroVagaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vagas-voluntario/:voluntarioId',
    component: VagasVoluntarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alterar-dados-instituicao/:id',
    component: AlterarDadosInstituicaoPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'alterar-dados-voluntario/:id',
    component: AlterarDadosVoluntarioPage,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
