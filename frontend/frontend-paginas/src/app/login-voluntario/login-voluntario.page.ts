import { Component } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-voluntario',
  templateUrl: './login-voluntario.page.html',
  styleUrls: ['./login-voluntario.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule]
})
export class LoginVoluntarioPage {
  constructor (
    private router: Router,
    private popoverController: PopoverController
  ) {}

  async logout() {
    localStorage.removeItem('token');
    await this.popoverController.dismiss();
    this.router.navigate(['/home']);
  }

  async AlterarDadosVoluntario() {
    await this.popoverController.dismiss();
    this.router.navigate(['/alterar-dados-voluntario']);
  }

}
