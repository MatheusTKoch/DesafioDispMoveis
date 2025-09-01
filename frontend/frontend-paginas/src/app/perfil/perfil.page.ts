import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  id: number | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.http.get(`http://localhost:3000/conta/${this.id}`).subscribe({
        next: (res) => this.conta = res,
        error: (err) => console.error('Erro ao buscar conta', err)
      });
    }
  }

}
