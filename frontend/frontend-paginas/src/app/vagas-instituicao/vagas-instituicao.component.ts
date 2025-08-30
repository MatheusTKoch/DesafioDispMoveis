import { Component, OnInit } from '@angular/core';
import { VagaService, Vaga } from './vaga.service';
import { CommonModule, DatePipe  } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IonicModule, PopoverController } from '@ionic/angular';




@Component({
  selector: 'app-vagas-instituicao',
  templateUrl: './vagas-instituicao.component.html',
  imports: [CommonModule, DatePipe, IonicModule],
  styleUrls: ['./vagas-instituicao.component.scss'],
  standalone: true
})
export class VagasInstituicaoComponent implements OnInit {
  vagas: Vaga[] = [];

 constructor(
  private vagaService: VagaService,
  private route: ActivatedRoute,
  private router: Router,
  private popoverController: PopoverController
) {}

  goToCadastro() {
  const idInstituicao = Number(this.route.snapshot.paramMap.get('id'));
  if (idInstituicao) {
    this.router.navigate([`/cadastro-vaga/${idInstituicao}`]);
  }
  }

  async logout() {
    localStorage.removeItem('token');
    await this.popoverController.dismiss();
    this.router.navigate(['/home']);
  }

  async AlterarDadosInstituicao() {
    await this.popoverController.dismiss();
    this.router.navigate(['/alterar-dados-instituicao']);
  }

  ngOnInit(): void {
    const idInstituicao = Number(this.route.snapshot.paramMap.get('id'));

    if (idInstituicao) {
      this.vagaService
        .listarVagasComInscricoes(idInstituicao)
        .subscribe((dados) => {
          this.vagas = dados;
        });
    }
  }
}
