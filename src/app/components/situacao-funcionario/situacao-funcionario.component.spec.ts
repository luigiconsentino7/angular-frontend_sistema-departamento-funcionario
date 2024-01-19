import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoFuncionarioComponent } from './situacao-funcionario.component';

describe('SituacaoFuncionarioComponent', () => {
  let component: SituacaoFuncionarioComponent;
  let fixture: ComponentFixture<SituacaoFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SituacaoFuncionarioComponent]
    });
    fixture = TestBed.createComponent(SituacaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
