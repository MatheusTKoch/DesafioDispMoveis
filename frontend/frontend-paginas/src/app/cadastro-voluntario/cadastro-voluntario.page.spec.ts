import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroVoluntarioPage } from './cadastro-voluntario.page';

describe('CadastroVoluntarioPage', () => {
  let component: CadastroVoluntarioPage;
  let fixture: ComponentFixture<CadastroVoluntarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVoluntarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
