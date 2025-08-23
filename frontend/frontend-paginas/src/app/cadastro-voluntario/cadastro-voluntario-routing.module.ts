import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroVoluntarioPage } from './cadastro-voluntario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroVoluntarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroVoluntarioPageRoutingModule {}
