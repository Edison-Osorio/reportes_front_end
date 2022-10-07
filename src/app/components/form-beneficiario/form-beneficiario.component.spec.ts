import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBeneficiarioComponent } from './form-beneficiario.component';

describe('FormBeneficiarioComponent', () => {
  let component: FormBeneficiarioComponent;
  let fixture: ComponentFixture<FormBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBeneficiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
