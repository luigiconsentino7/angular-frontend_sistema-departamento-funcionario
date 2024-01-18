import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFotoFuncionarioComponent } from './upload-foto-funcionario.component';

describe('UploadFotoFuncionarioComponent', () => {
  let component: UploadFotoFuncionarioComponent;
  let fixture: ComponentFixture<UploadFotoFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadFotoFuncionarioComponent]
    });
    fixture = TestBed.createComponent(UploadFotoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
