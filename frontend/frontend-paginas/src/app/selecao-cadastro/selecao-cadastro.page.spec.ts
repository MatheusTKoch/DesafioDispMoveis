import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelecaoCadastroPage } from './selecao-cadastro.page';

describe('SelecaoCadastroPage', () => {
  let component: SelecaoCadastroPage;
  let fixture: ComponentFixture<SelecaoCadastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
