import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

export interface Voluntario {
  nome: string;
  email: string;
  telefone: string;
  status: string;
}

export interface Vaga {
  id: number;
  titulo: string;
  descricao: string;
  habilidades: string;
  localizacao: string;
  qtdVagas: number;
  dataEntrega: string;
  statusVaga: string;
  voluntarios: Voluntario[];
}

@Injectable({
  providedIn: 'root'
})
export class VagaService implements OnInit {
  private baseUrl = 'http://localhost:3000/vagas';

  id!: number;
  conta: any;
  vagasPostadas!: Vaga[];
  vagasCandidatadas!: Vaga[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.http.get(`http://localhost:3000/conta/${this.id}`).subscribe({
        next: (res: any) => {
          this.conta = res;
          if (this.conta?.tipo_conta === 'instituicao') {
            this.listarVagasComInscricoes(this.id).subscribe({
              next: (vagas: any) => this.vagasPostadas = vagas
            });
          } else if (this.conta?.tipo_conta === 'voluntario') {
            this.listarVagasCandidatadas(this.id).subscribe({
              next: (vagas: any) => this.vagasCandidatadas = vagas
            });
          }
        }
      });
    }
  }

  listarVagasComInscricoes(idInstituicao: number): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(`${this.baseUrl}/instituicao/${idInstituicao}/inscricoes`);
  }

  listarVagasCandidatadas(idVoluntario: number): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(`${this.baseUrl}/candidatadas/${idVoluntario}`);
  }
}
