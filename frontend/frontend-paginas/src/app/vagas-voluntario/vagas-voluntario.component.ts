import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, PopoverController, ToastController } from '@ionic/angular';
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
    private router: Router,
    private toastController: ToastController
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
      this.showToast('Erro: ID do voluntário não encontrado na URL.', 'danger');
      return;
    }

    this.vagaService.inscrever(voluntarioId, vaga.id).subscribe({
      next: () => {
        this.showToast('Inscrição realizada com sucesso!');
        this.listarVagasAbertas(); // atualiza lista de vagas
      },
      error: (err) => this.showToast('Erro ao se inscrever: ' + err.message, 'danger')
    });
  }

  async logout() {
    localStorage.removeItem('token');
    await this.popoverController.dismiss();
    this.router.navigate(['/home']);
  }

  async AlterarDadosVoluntario() {
    await this.popoverController.dismiss();
    const urlSegments = this.router.url.split('/');
    const idVoluntario = urlSegments[urlSegments.length - 1];
    this.router.navigate([`alterar-dados-voluntario/${idVoluntario}`]);

  }

  async AcessarPerfil() {
    const urlSegments = this.router.url.split('/');
    const idVoluntario = urlSegments[urlSegments.length - 1];
    this.router.navigate([`perfil/${idVoluntario}`]);
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2500,
      color,
      position: 'top'
    });
    await toast.present();
  }

}
