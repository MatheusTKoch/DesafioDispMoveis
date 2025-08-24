import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginInstituicaoPage } from './login-instituicao.page';

const routes: Routes = [
  {
    path: '',
    component: LoginInstituicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginInstituicaoPageRoutingModule {}
