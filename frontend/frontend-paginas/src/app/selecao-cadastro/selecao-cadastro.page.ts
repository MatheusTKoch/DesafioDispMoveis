import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-selecao-cadastro',
  templateUrl: './selecao-cadastro.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class SelecaoCadastroPage {}
