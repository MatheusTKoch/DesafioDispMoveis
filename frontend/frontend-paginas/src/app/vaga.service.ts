import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vaga {
  id: number;
  titulo: string;
  descricao: string;
  habilidades: string;
  localizacao: string;
  qtdVagas: number;
  dataEntrega: string;
  statusVaga: string;
}

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private baseUrl = 'http://localhost:3000/vagas'; // URL do backend

  constructor(private http: HttpClient) {}

  listarVagasAbertas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(`${this.baseUrl}/abertas`);
  }

  inscrever(voluntarioId: number, vagaId: number): Observable<any> {
    return this.http.post(`http://localhost:3000/inscricoes/${vagaId}/${voluntarioId}`, {});
  }
}
