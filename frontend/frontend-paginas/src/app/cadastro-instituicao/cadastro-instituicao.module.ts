import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CadastroInstituicaoPage } from './cadastro-instituicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: CadastroInstituicaoPage }]),
    CadastroInstituicaoPage
  ],
  declarations: []
})
export class CadastroInstituicaoPageModule {}
