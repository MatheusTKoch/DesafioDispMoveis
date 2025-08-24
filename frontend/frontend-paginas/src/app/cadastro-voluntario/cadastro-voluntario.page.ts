import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { isValidEmail } from '../utils/validators/validatorEmail';
import { isValidPassword } from '../utils/validators/validatorSenha';
import { maskCpf } from '../utils/mascara/maskCPF';
import { maskTelefone } from '../utils/mascara/maskTelefone';

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
  maskCpf = maskCpf;
  maskTelefone = maskTelefone;

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

    const cpfFinal = this.voluntario.cpf.replace(/\D/g, '');
    const telefoneFinal = this.voluntario.telefone.replace(/\D/g, '');
    const telefoneEmergencialFinal = this.voluntario.contato_emergencial.replace(/\D/g, '');

    this.voluntario.cpf = cpfFinal;
    this.voluntario.telefone = telefoneFinal;
    this.voluntario.contato_emergencial = telefoneEmergencialFinal;

    if (!isValidEmail(this.voluntario.email)) {
      this.errorMessage = 'Email inválido!';
      return;
    }
    if (!isValidPassword(this.voluntario.senha)) {
      this.errorMessage = 'Senha deve ter ao menos 6 caracteres, letras e números!';
      return;
    }

    this.http.post('http://localhost:3000/conta/cadastro/voluntario', this.voluntario)
      .subscribe({
        next: () => this.successMessage = 'Cadastro realizado com sucesso!',
        error: err => this.errorMessage = err.error?.message || 'Erro ao realizar login.'
      });
  }
}
