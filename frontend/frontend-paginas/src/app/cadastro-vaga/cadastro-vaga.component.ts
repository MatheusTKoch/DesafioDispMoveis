import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-vaga',
  templateUrl: './cadastro-vaga.component.html',
  styleUrls: ['./cadastro-vaga.component.scss'],
  standalone: true,
  imports: [
    CommonModule,  // necessário para *ngIf, *ngFor
    FormsModule,   // necessário para ngModel
    IonicModule,   // necessário para ion-label, ion-input, ion-button, etc
    HttpClientModule // necessário para HttpClient
  ],
})
export class CadastroVagaComponent {
  instituicaoId: number;

  form = {
    titulo: '',
    descricao: '',
    habilidades: '',
    localizacao: '',
    qtd_vagas: 1,
    data_entrega: '',
    status_vaga: 'aberta',
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {
    this.instituicaoId = Number(this.route.snapshot.paramMap.get('id'));
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2500,
      color,
      position: 'top'
    });
    await toast.present();
  }

  submit() {
    this.http
      .post(`http://localhost:3000/vagas/cria-vaga/${this.instituicaoId}`, this.form)
      .subscribe({
        next: (res) => {
          this.showToast('Vaga cadastrada com sucesso!');
        },
        error: (err) => {
          console.error(err);
          this.showToast('Erro ao cadastrar vaga', 'danger');
        },
      });
  }
}
