import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

interface Instituicao {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cnpj: string;
  endereco: string;
  tipo_conta: 'instituicao';
}

@Component({
  selector: 'app-cadastro-instituicao',
  templateUrl: './cadastro-instituicao.page.html',
  styleUrls: ['./cadastro-instituicao.page.scss'],
  standalone: true,       // ✅ torna o componente standalone
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, RouterModule]
})
export class CadastroInstituicaoPage {
  instituicao: Instituicao = {
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    cnpj: '',
    endereco: '',
    tipo_conta: 'instituicao'
  };

  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    this.successMessage = '';
    this.errorMessage = '';

    this.http.post('http://localhost:3000/conta/cadastro/instituicao', this.instituicao)
      .subscribe({
        next: () => this.successMessage = 'Cadastro realizado com sucesso!',
        error: err => this.errorMessage = `Erro: ${err.error?.message || 'Não foi possível cadastrar.'}`
      });
  }
}
