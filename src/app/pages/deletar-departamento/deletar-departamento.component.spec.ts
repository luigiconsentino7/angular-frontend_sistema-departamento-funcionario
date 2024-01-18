import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarDepartamentoComponent } from './deletar-departamento.component';

describe('DeletarDepartamentoComponent', () => {
  let component: DeletarDepartamentoComponent;
  let fixture: ComponentFixture<DeletarDepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletarDepartamentoComponent]
    });
    fixture = TestBed.createComponent(DeletarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
