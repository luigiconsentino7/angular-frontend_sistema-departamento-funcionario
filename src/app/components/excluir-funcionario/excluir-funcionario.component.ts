import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Funcionarios } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-excluir-funcionario',
  templateUrl: './excluir-funcionario.component.html',
  styleUrls: ['./excluir-funcionario.component.css']
})
export class ExcluirFuncionarioComponent {

  inputData: any;
  funcionario!: Funcionarios

  constructor(
    private funcionarioService : FuncionarioService,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirFuncionarioComponent>
  ) {}

  ngOnInit(): void {
    this.inputData = this.data

    this.funcionarioService.GetFuncionarioId(this.inputData.id).subscribe((data) => {
      this.funcionario = data;

      console.log(this.funcionario)
    });
  }

  Delete(){
    this.funcionarioService.DeleteFuncionario(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload()
    })
  }

  Cancelar(){
    this.ref.close();
  }

}
