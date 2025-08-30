import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { maskTelefone } from '../utils/mascara/maskTelefone';

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

  alterar() {
    this.successMessage = '';
    this.errorMessage = '';

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
