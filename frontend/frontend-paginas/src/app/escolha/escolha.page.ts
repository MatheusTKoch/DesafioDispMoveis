import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolha',
  templateUrl: './escolha.page.html',
  styleUrls: ['./escolha.page.scss']
})
export class EscolhaPage {

  constructor(private router: Router) {}

  goVoluntario() {
    this.router.navigate(['/cadastro-voluntario']);
  }

  goInstituicao() {
    this.router.navigate(['/cadastro-instituicao']);
  }
}
