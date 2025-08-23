import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CadastroInstituicaoPageRoutingModule } from './cadastro-instituicao-routing.module';
import { CadastroInstituicaoPage } from './cadastro-instituicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroInstituicaoPageRoutingModule
  ],
  declarations: [CadastroInstituicaoPage]
})
export class CadastroInstituicaoPageModule {}
