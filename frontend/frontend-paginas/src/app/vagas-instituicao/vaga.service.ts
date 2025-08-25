import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
export class VagaService {
  private baseUrl = 'http://localhost:3000/vagas';

  constructor(private http: HttpClient) {}

  listarVagasComInscricoes(idInstituicao: number): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(`${this.baseUrl}/instituicao/${idInstituicao}/inscricoes`);
  }
}
