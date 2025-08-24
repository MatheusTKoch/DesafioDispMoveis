import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginVoluntarioPageRoutingModule } from './login-voluntario-routing.module';

import { LoginVoluntarioPage } from './login-voluntario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginVoluntarioPageRoutingModule,
    LoginVoluntarioPage
  ],
  declarations: []
})
export class LoginVoluntarioPageModule {}
