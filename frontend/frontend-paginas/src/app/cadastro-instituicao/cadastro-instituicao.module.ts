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
    RouterModule.forChild([{ path: '', component: CadastroInstituicaoPage }])
  ],
  declarations: [CadastroInstituicaoPage] // ✅ agora funciona
})
export class CadastroInstituicaoPageModule {}