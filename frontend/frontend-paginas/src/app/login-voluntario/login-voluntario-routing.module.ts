import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginVoluntarioPage } from './login-voluntario.page';

const routes: Routes = [
  {
    path: '',
    component: LoginVoluntarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginVoluntarioPageRoutingModule {}
