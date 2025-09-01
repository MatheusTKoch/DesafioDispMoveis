import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ]
})
export class PerfilPage implements OnInit {
  conta: any;
  id: number;
  vagasPostadas: any[] = [];
  vagasCandidatadas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,

  ) {
    this.id = 0;
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.http.get(`http://localhost:3000/conta/${this.id}`).subscribe({
        next: (res: any) => {
          this.conta = res;
          if (this.conta?.tipo_conta === 'instituicao') {
            this.http.get(`http://localhost:3000/vagas/instituicao/${this.id}`).subscribe({
              next: (vagas: any) => this.vagasPostadas = vagas
            });
          }
          else if (this.conta?.tipo_conta === 'voluntario') {
            this.http.get(`http://localhost:3000/vagas/candidatadas/${this.id}`).subscribe({
              next: (vagas: any) => this.vagasCandidatadas = vagas
            });
          }
        },
        error: (err) => {
          this.conta = null;
        }
      });
    }
  }

}
