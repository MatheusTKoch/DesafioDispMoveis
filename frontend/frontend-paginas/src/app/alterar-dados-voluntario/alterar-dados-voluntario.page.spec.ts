import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarDadosVoluntarioPage } from './alterar-dados-voluntario.page';

describe('AlterarDadosVoluntarioPage', () => {
  let component: AlterarDadosVoluntarioPage;
  let fixture: ComponentFixture<AlterarDadosVoluntarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarDadosVoluntarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
