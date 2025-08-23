import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  usuario = '';
  senha = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('http://localhost:3000/login', {
      usuario: this.usuario,
      senha: this.senha
    }).subscribe({
      next: (res) => {
        alert(res.message);
        if (res.token) localStorage.setItem('token', res.token);
        this.router.navigate(['/escolha']);
      },
      error: (err) => alert(`Erro: ${err.error?.message || 'Falha no login'}`)
    });
  }

  cadastrar() {
    this.router.navigate(['/escolha']);
  }
}
