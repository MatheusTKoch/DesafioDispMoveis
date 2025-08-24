import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginInstituicaoPage } from './login-instituicao.page';

describe('LoginInstituicaoPage', () => {
  let component: LoginInstituicaoPage;
  let fixture: ComponentFixture<LoginInstituicaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInstituicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
