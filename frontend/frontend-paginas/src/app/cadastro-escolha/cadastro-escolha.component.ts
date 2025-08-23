import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-escolha',
  templateUrl: './cadastro-escolha.component.html',
  styleUrls: ['./cadastro-escolha.component.scss']
})
export class CadastroEscolhaComponent {
  constructor(private router: Router) {}

  goVoluntario() {
    this.router.navigate(['/cadastro-voluntario']);
  }

  goInstituicao() {
    alert('Cadastro de instituição ainda não implementado.');
  }
}
