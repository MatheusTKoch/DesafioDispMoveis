import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroInstituicaoPage } from './cadastro-instituicao.page';

describe('CadastroInstituicaoPage', () => {
  let component: CadastroInstituicaoPage;
  let fixture: ComponentFixture<CadastroInstituicaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroInstituicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
