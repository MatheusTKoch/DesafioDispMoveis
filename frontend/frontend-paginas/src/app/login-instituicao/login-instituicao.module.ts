import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { LoginInstituicaoPageRoutingModule } from './login-instituicao-routing.module';

import { LoginInstituicaoPage } from './login-instituicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginInstituicaoPageRoutingModule,
    LoginInstituicaoPage
  ],
  declarations: []
})
export class LoginInstituicaoPageModule {}
