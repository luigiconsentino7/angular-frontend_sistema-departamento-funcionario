import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Departamentos } from 'src/app/models/Departamentos';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-situacao-departamento',
  templateUrl: './situacao-departamento.component.html',
  styleUrls: ['./situacao-departamento.component.css']
})
export class SituacaoDepartamentoComponent {

  inputData: any;
  departamento!: Departamentos;

  constructor( private departamentoService : DepartamentoService, private router : Router, @Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<SituacaoDepartamentoComponent> ) {}

  ngOnInit(): void {
    this.inputData = this.data

    this.departamentoService.GetDepartamentoId(this.inputData.id).subscribe((data) => {
      this.departamento = data;
    });
  }

  DisableDepartamento(){
    this.departamentoService.DisableDepartamento(this.inputData.id).subscribe((data) => {
      location.reload()
    });
  }

  EnableDepartamento(){
    this.departamentoService.EnableDepartamento(this.departamento, this.inputData.id).subscribe((data) => {
      location.reload()
    });
  }

  Return(){
    this.ref.close();
  }

}
