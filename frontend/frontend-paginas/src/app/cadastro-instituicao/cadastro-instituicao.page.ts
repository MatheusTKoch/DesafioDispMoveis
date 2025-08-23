import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  styleUrls: ['./cadastro-instituicao.page.scss']
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

    this.http.post<any>('http://localhost:3000/conta/cadastro/instituicao', this.instituicao)
      .subscribe({
        next: () => this.successMessage = 'Cadastro realizado com sucesso!',
        error: err => this.errorMessage = `Erro: ${err.error?.message || 'Não foi possível cadastrar.'}`
      });
  }
}
