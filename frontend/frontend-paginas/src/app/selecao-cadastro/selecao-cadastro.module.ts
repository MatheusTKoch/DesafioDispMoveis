import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecaoCadastroPageRoutingModule } from './selecao-cadastro-routing.module';

import { SelecaoCadastroPage } from './selecao-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecaoCadastroPageRoutingModule,
    SelecaoCadastroPage
  ],
  declarations: []
})
export class SelecaoCadastroPageModule {}
