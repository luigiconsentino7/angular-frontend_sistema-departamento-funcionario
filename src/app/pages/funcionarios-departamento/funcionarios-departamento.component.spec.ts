import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosDepartamentoComponent } from './funcionarios-departamento.component';

describe('FuncionariosDepartamentoComponent', () => {
  let component: FuncionariosDepartamentoComponent;
  let fixture: ComponentFixture<FuncionariosDepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariosDepartamentoComponent]
    });
    fixture = TestBed.createComponent(FuncionariosDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
