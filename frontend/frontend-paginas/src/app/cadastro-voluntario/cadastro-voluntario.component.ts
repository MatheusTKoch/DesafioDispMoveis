import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-voluntario',
  templateUrl: './cadastro-voluntario.component.html',
  styleUrls: ['./cadastro-voluntario.component.scss']
})
export class CadastroVoluntarioComponent {
  nome: string = '';
  email: string = '';
  cpf: string = '';
  telefone: string = '';
  contatoEmergencia: string = '';
  habilidades: string = '';

  constructor(private router: Router) {}

  cadastrar() {
    console.log({
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      telefone: this.telefone,
      contatoEmergencia: this.contatoEmergencia,
      habilidades: this.habilidades
    });

    this.router.navigate(['/tela-voluntario']);
  }
}
