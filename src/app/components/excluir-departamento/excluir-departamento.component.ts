import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Departamentos } from 'src/app/models/Departamentos';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir-departamento.component.html',
  styleUrls: ['./excluir-departamento.component.css']
})

export class ExcluirDepartamentoComponent implements OnInit{

  inputData: any;
  departamento!: Departamentos

  constructor(
    private departamentoService : DepartamentoService, private router : Router, @Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ExcluirDepartamentoComponent>) {}

  ngOnInit(): void {
    this.inputData = this.data

    this.departamentoService.GetDepartamentoId(this.inputData.id).subscribe((data) => {
      this.departamento = data;

      console.log(this.departamento)
    });
  }

  Delete(){
    this.departamentoService.DeleteDepartamento(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload()
    });
  }

  Return(){
    this.ref.close();
  }

}
