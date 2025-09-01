import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.instituicaoId = Number(this.route.snapshot.paramMap.get('id'));
  }

  submit() {
    this.http
      .post(`http://localhost:3000/vagas/cria-vaga/${this.instituicaoId}`, this.form)
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
