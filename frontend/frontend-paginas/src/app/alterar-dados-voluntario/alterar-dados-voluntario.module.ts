import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarDadosVoluntarioPageRoutingModule } from './alterar-dados-voluntario-routing.module';

import { AlterarDadosVoluntarioPage } from './alterar-dados-voluntario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarDadosVoluntarioPageRoutingModule,
    AlterarDadosVoluntarioPage
  ],
  declarations: []
})
export class AlterarDadosVoluntarioPageModule {}
