import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-voluntario',
  templateUrl: './login-voluntario.page.html',
  styleUrls: ['./login-voluntario.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule]
})
export class LoginVoluntarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
