import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroInstituicaoPage } from './cadastro-instituicao.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroInstituicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroInstituicaoPageRoutingModule {}
