import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoDepartamentoComponent } from './situacao-departamento.component';

describe('SituacaoDepartamentoComponent', () => {
  let component: SituacaoDepartamentoComponent;
  let fixture: ComponentFixture<SituacaoDepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SituacaoDepartamentoComponent]
    });
    fixture = TestBed.createComponent(SituacaoDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
