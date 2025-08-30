import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarDadosInstituicaoPage } from './alterar-dados-instituicao.page';

describe('AlterarDadosInstituicaoPage', () => {
  let component: AlterarDadosInstituicaoPage;
  let fixture: ComponentFixture<AlterarDadosInstituicaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarDadosInstituicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
