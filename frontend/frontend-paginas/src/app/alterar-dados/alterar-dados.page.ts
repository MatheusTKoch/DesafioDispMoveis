import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { maskTelefone } from '../utils/mascara/maskTelefone';
import { maskCnpj } from '../utils/mascara/maskCNPJ';
import { maskCpf } from '../utils/mascara/maskCPF';
import { isValidEmail } from '../utils/validators/validatorEmail';

type TipoConta = 'voluntario' | 'instituicao';

@Component({
  selector: 'app-alterar-dados',
  templateUrl: './alterar-dados.page.html',
  styleUrls: ['./alterar-dados.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule]
})

export class AlterarDadosPage {
  tipo: TipoConta = 'voluntario';

  telefone = '';
  endereco = '';
  senha = '';

  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onTelefone(e: any) { this.telefone = maskTelefone(e.detail?.value || ''); }

  salvar() {
    this.successMessage = '';
    this.errorMessage = '';


    if (this.tipo === 'voluntario') {
      const body: any = {
        telefone: this.telefone,
        endereco: this.endereco,
        senha: this.senha
      };
      this.http.post('http://localhost:3000/conta/cadastro/voluntario', body).subscribe({
        next: () => this.successMessage = 'Perfil salvo com sucesso!',
        error: (err) => this.errorMessage = err?.error?.message || 'Erro ao salvar perfil.'
      });
    } else {
      const body: any = {
        telefone: this.telefone,
        endereco: this.endereco,
        senha: this.senha
      };
      this.http.post('http://localhost:3000/conta/cadastro/instituicao', body).subscribe({
        next: () => this.successMessage = 'Perfil salvo com sucesso!',
        error: (err) => this.errorMessage = err?.error?.message || 'Erro ao salvar perfil.'
      });
    }
  }
}
