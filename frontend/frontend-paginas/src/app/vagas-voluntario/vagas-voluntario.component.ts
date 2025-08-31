import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { VagaService, Vaga } from '../vaga.service'; // ajuste o caminho conforme seu service

@Component({
  selector: 'app-vagas-voluntario',
  templateUrl: './vagas-voluntario.component.html',
  styleUrls: ['./vagas-voluntario.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule] // <-- RouterModule necessário para ActivatedRoute
})
export class VagasVoluntarioComponent implements OnInit {
  vagas: Vaga[] = [];
  id: any;

  constructor(
    private vagaService: VagaService,
    private route: ActivatedRoute,
    private popoverController: PopoverController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarVagasAbertas();
  }

  listarVagasAbertas() {
    this.vagaService.listarVagasAbertas().subscribe({
      next: (dados) => this.vagas = dados,
      error: (err) => console.error('Erro ao carregar vagas', err)
    });
  }

  inscrever(vaga: Vaga) {
    const voluntarioId = Number(this.route.snapshot.paramMap.get('voluntarioId'));

    if (!voluntarioId) {
      alert('Erro: ID do voluntário não encontrado na URL.');
      return;
    }

    this.vagaService.inscrever(voluntarioId, vaga.id).subscribe({
      next: () => {
        alert('Inscrição realizada com sucesso!');
        this.listarVagasAbertas(); // atualiza lista de vagas
      },
      error: (err) => alert('Erro ao se inscrever: ' + err.message)
    });
  }

  async logout() {
    localStorage.removeItem('token');
    await this.popoverController.dismiss();
    this.router.navigate(['/home']);
  }

  async AlterarDadosVoluntario() {
    await this.popoverController.dismiss();
    const idVoluntario = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/alterar-dados-instituicao/${idVoluntario}`]);
  }

}
