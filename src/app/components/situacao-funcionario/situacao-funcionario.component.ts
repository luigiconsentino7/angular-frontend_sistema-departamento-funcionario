import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Funcionarios } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-situacao-funcionario',
  templateUrl: './situacao-funcionario.component.html',
  styleUrls: ['./situacao-funcionario.component.css']
})
export class SituacaoFuncionarioComponent {

  inputData: any;
  funcionario!: Funcionarios

  constructor(
    private funcionarioService : FuncionarioService,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<SituacaoFuncionarioComponent>
  ) {}

  ngOnInit(): void {
    this.inputData = this.data

    this.funcionarioService.GetFuncionarioId(this.inputData.id).subscribe((data) => {
      this.funcionario = data;

      console.log(this.funcionario)
    });
  }

  DisableFuncionario(){
    this.funcionarioService.DisableFuncionario(this.inputData.id).subscribe((data) => {
      location.reload()
    })
  }

  EnableFuncionario(){
    this.funcionarioService.EnableFuncionario(this.funcionario ,this.inputData.id).subscribe((data) => {
      location.reload()
    })
  }

  Return(){
    this.ref.close();
  }

}
