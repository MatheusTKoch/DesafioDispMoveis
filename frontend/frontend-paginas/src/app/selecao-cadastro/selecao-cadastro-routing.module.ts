import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecaoCadastroPage } from './selecao-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: SelecaoCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecaoCadastroPageRoutingModule {}
