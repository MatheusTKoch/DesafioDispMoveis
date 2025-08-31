import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VagasVoluntarioComponent } from './vagas-voluntario.component';

describe('VagasVoluntarioComponent', () => {
  let component: VagasVoluntarioComponent;
  let fixture: ComponentFixture<VagasVoluntarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VagasVoluntarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VagasVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
