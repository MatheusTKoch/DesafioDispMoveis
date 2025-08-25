import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VagasInstituicaoComponent } from './vagas-instituicao.component';

describe('VagasInstituicaoComponent', () => {
  let component: VagasInstituicaoComponent;
  let fixture: ComponentFixture<VagasInstituicaoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VagasInstituicaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VagasInstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
