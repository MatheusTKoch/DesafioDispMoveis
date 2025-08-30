import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { maskCnpj } from '../utils/mascara/maskCNPJ';
import { maskCpf } from '../utils/mascara/maskCPF';
import { maskTelefone } from '../utils/mascara/maskTelefone';
import { isValidEmail } from '../utils/validators/validatorEmail';

type TipoConta = 'voluntario' | 'instituicao';

@Component({
  selector: 'app-alterar-dados-instituicao',
  templateUrl: './alterar-dados-instituicao.page.html',
  styleUrls: ['./alterar-dados-instituicao.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ]
})
export class AlterarDadosInstituicaoPage {

  tipo: TipoConta = 'voluntario';
  nome = '';
  email = '';
  telefone = '';
  endereco = '';
  cpf = '';
  cnpj = '';
  senha = '';

  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onTelefone(e: any) { this.telefone = maskTelefone(e.detail?.value || ''); }
  onCnpj(e: any) { this.cnpj = maskCnpj(e.detail?.value || ''); }

  salvar() {
    this.successMessage = '';
    this.errorMessage = '';

    if (!this.nome || !this.email) {
      this.errorMessage = 'Preencha nome e email.';
      return;
    }
    if (!isValidEmail(this.email)) {
      this.errorMessage = 'Email inválido.';
      return;
    }

    if (this.tipo === 'voluntario') {
      const body: any = {
        nome: this.nome,
        email: this.email,
        cpf: this.cpf,
        telefone: this.telefone,
        endereco: this.endereco
      };
      this.http.post('http://localhost:3000/conta/cadastro/voluntario', body).subscribe({
        next: () => this.successMessage = 'Perfil salvo com sucesso!',
        error: (err) => this.errorMessage = err?.error?.message || 'Erro ao salvar perfil.'
      });
    } else {
      const body: any = {
        nome: this.nome,
        email: this.email,
        cnpj: this.cnpj,
        telefone: this.telefone,
        endereco: this.endereco
      };
      this.http.post('http://localhost:3000/conta/cadastro/instituicao', body).subscribe({
        next: () => this.successMessage = 'Perfil salvo com sucesso!',
        error: (err) => this.errorMessage = err?.error?.message || 'Erro ao salvar perfil.'
      });
    }
  }

}
