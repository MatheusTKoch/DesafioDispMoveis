import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginVoluntarioPage } from './login-voluntario.page';

describe('LoginVoluntarioPage', () => {
  let component: LoginVoluntarioPage;
  let fixture: ComponentFixture<LoginVoluntarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVoluntarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
