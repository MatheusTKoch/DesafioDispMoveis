import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isValidEmail } from '../utils/validators/validatorEmail';
import { isValidPassword } from '../utils/validators/validatorSenha';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  email = '';
  senha = '';
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!isValidEmail(this.email)) {
      this.errorMessage = 'Email inválido!';
      return;
    }
    if (!isValidPassword(this.senha)) {
      this.errorMessage = 'Senha deve ter ao menos 6 caracteres, letras e números!';
      return;
    }

    this.http.post('http://localhost:3000/conta/login', {
      email: this.email,
      senha: this.senha
    }).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        if (res.tipo_conta === 'instituicao') {
          this.router.navigate([`/vagas-instituicao/${res.id_conta}`]);
        } else {
          this.router.navigate(['/login-voluntario']);
        }
      },
      error: err => this.errorMessage = err.error?.message || 'Erro ao realizar login.'
    });
  }
}
