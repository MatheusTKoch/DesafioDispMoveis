import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { CadastroEscolhaComponent } from './cadastro-escolha/cadastro-escolha.component';
import { CadastroVoluntarioComponent } from './cadastro-voluntario/cadastro-voluntario.component';
import { TelaVoluntarioComponent } from './tela-voluntario/tela-voluntario.component';
import { TelaInstituicaoComponent } from './tela-instituicao/tela-instituicao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroEscolhaComponent,
    CadastroVoluntarioComponent,
    TelaVoluntarioComponent,
    TelaInstituicaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
