import { Component } from '@angular/core';

interface Vaga {
  titulo: string;
  descricao: string;
  status: 'Aberta' | 'Encerrada';
  candidatos: number;
  tipo: string;
}

@Component({
  selector: 'app-tela-instituicao',
  templateUrl: './tela-instituicao.component.html',
  styleUrls: ['./tela-instituicao.component.scss']
})
export class TelaInstituicaoComponent {
  vagas: Vaga[] = [
    {
      titulo: 'Professor de Matemática',
      descricao: 'Aulas de reforço escolar para alunos do ensino médio, 2x por semana, no período da tarde.',
      status: 'Aberta',
      candidatos: 12,
      tipo: 'Ensino'
    },
    {
      titulo: 'Auxiliar Administrativo',
      descricao: 'Auxílio no controle de documentos e atendimento ao público.',
      status: 'Encerrada',
      candidatos: 8,
      tipo: 'Administrativo'
    }
  ];
}
