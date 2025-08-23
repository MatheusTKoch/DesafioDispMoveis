import { Component, OnInit } from '@angular/core';

interface Vaga {
  titulo: string;
  instituicao: string;
  descricao: string;
  local: string;
  vagasDisponiveis: string;
  corBadge: string;
}

@Component({
  selector: 'app-tela-voluntario',
  templateUrl: './tela-voluntario.component.html',
  styleUrls: ['./tela-voluntario.component.css']
})
export class TelaVoluntarioComponent implements OnInit {

  filtro: string = '';

  vagas: Vaga[] = [
    {
      titulo: 'Auxiliar em Distribuição de Alimentos',
      instituicao: 'Centro Comunitário Esperança',
      descricao: 'Ajude na distribuição de alimentos para famílias em situação de vulnerabilidade. Necessário disponibilidade aos sábados.',
      local: 'São Paulo, SP',
      vagasDisponiveis: '3 vagas disponíveis',
      corBadge: 'green'
    },
    {
      titulo: 'Mentor de Programação para Jovens',
      instituicao: 'Instituto Educação Digital',
      descricao: 'Seja mentor de jovens interessados em aprender programação. Conhecimentos básicos em HTML, CSS e JavaScript são necessários.',
      local: 'Remoto',
      vagasDisponiveis: '5 vagas disponíveis',
      corBadge: 'green'
    },
    {
      titulo: 'Apoio em Campanha de Doação de Sangue',
      instituicao: 'Hospital Santa Esperança',
      descricao: 'Ajude na organização e divulgação da campanha de doação de sangue. Treinamento será fornecido no local.',
      local: 'Rio de Janeiro, RJ',
      vagasDisponiveis: 'Última vaga',
      corBadge: 'yellow'
    }
  ];

  vagasFiltradas: Vaga[] = [];

  ngOnInit(): void {
    this.vagasFiltradas = this.vagas;
  }

  aplicarFiltro() {
    const termo = this.filtro.toLowerCase();
    this.vagasFiltradas = this.vagas.filter(v =>
      v.titulo.toLowerCase().includes(termo) ||
      v.instituicao.toLowerCase().includes(termo) ||
      v.local.toLowerCase().includes(termo)
    );
  }
}
