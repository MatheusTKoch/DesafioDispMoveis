import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

interface Voluntario {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  contato_emergencial: string;
  habilidades: string;
  tipo_conta: 'voluntario';
  senha: string;
}

@Component({
  selector: 'app-cadastro-voluntario',
  templateUrl: './cadastro-voluntario.page.html',
  styleUrls: ['./cadastro-voluntario.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, RouterModule]
})
export class CadastroVoluntarioPage {
  voluntario: Voluntario = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    contato_emergencial: '',
    habilidades: '',
    senha:'',
    tipo_conta: 'voluntario'
  };

  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    this.successMessage = '';
    this.errorMessage = '';

    this.http.post('http://localhost:3000/conta/cadastro/voluntario', this.voluntario)
      .subscribe({
        next: () => this.successMessage = 'Cadastro realizado com sucesso!',
        error: err => this.errorMessage = `Erro: ${err.error?.message || 'Não foi possível cadastrar.'}`
      });
  }
}
