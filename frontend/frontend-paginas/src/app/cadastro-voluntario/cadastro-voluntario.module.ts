import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CadastroVoluntarioPageRoutingModule } from './cadastro-voluntario-routing.module';
import { CadastroVoluntarioPage } from './cadastro-voluntario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroVoluntarioPageRoutingModule,
    CadastroVoluntarioPage
  ],
  declarations: []
})
export class CadastroVoluntarioPageModule {}
