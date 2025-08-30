import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarDadosInstituicaoPage } from './alterar-dados-instituicao.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarDadosInstituicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarDadosInstituicaoPageRoutingModule {}
