import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
  form = {
    titulo: '',
    descricao: '',
    habilidades: '',
    localizacao: '',
    qtd_vagas: 1,
    data_entrega: '',
    status_vaga: 'aberta',
  };

  constructor(private http: HttpClient) {}

  submit() {
    const instituicaoId = 13; // fixo para teste
    this.http
      .post(`http://localhost:3000/vagas/cria-vaga/${instituicaoId}`, this.form)
      .subscribe({
        next: (res) => {
          alert('Vaga cadastrada com sucesso!');
          console.log(res);
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao cadastrar vaga');
        },
      });
  }
}
