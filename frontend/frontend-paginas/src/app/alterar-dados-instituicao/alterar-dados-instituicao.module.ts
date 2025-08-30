import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarDadosInstituicaoPageRoutingModule } from './alterar-dados-instituicao-routing.module';

import { AlterarDadosInstituicaoPage } from './alterar-dados-instituicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarDadosInstituicaoPageRoutingModule
  ],
  declarations: [AlterarDadosInstituicaoPage]
})
export class AlterarDadosInstituicaoPageModule {}
