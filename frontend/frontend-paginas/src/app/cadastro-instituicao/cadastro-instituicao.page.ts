import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { isValidEmail } from '../utils/validators/validatorEmail';
import { isValidPassword } from '../utils/validators/validatorSenha';
import { maskCnpj } from '../utils/mascara/maskCNPJ';
import { maskTelefone } from '../utils/mascara/maskTelefone';
import { Router } from '@angular/router';

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
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule, RouterModule]
})
export class CadastroInstituicaoPage {
  maskCnpj = maskCnpj;
  maskTelefone = maskTelefone;

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

  constructor(private http: HttpClient, private router: Router) {}

  submitForm() {
    this.successMessage = '';
    this.errorMessage = '';
    const cnpjFinal = this.instituicao.cnpj.replace(/\D/g, '');
    const telefoneFinal = this.instituicao.telefone.replace(/\D/g, '');

    this.instituicao.cnpj = cnpjFinal;
    this.instituicao.telefone = telefoneFinal;

    if (!isValidEmail(this.instituicao.email)) {
      this.errorMessage = 'Email inválido!';
      return;
    }

    if (!isValidPassword(this.instituicao.senha)) {
      this.errorMessage = 'Senha deve ter ao menos 6 caracteres, letras e números!';
      return;
    }

    this.http.post('http://localhost:3000/conta/cadastro/instituicao', this.instituicao)
      .subscribe({
        next: () => {
          this.successMessage = 'Cadastro realizado com sucesso!';
          this.router.navigate(['/login-instituicao']);
        },
        error: err => this.errorMessage = err.error?.message || 'Erro ao realizar login.'
      });
  }
}
