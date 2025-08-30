import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarDadosVoluntarioPage } from './alterar-dados-voluntario.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarDadosVoluntarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarDadosVoluntarioPageRoutingModule {}
