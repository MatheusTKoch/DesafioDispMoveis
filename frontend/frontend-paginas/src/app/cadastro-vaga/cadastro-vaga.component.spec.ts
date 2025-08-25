import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CadastroVagaComponent } from './cadastro-vaga.component';

describe('CadastroVagaComponent', () => {
  let component: CadastroVagaComponent;
  let fixture: ComponentFixture<CadastroVagaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CadastroVagaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
