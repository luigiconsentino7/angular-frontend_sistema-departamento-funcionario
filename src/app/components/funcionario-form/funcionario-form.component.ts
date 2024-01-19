import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamentos } from 'src/app/models/Departamentos';
import { Funcionarios } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})

export class FuncionarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Funcionarios>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() btnVoltar!: string;
  @Input() dadosDepartamento: Departamentos | null = null;
  @Input() dadosFuncionario: Funcionarios | null = null;

  funcionarioForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {

      this.funcionarioForm = new FormGroup({
        nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome : '', [Validators.required]),
        sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome : '' , [Validators.required]),
        rg: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.rg : '' , [Validators.required]),
        departamentoId: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamentoId : 0 , [Validators.required]),
      })

  }

  submit(){
    console.log(this.funcionarioForm.value)
    this.onSubmit.emit(this.funcionarioForm.value);
  }

  Return(): any {
     window.history.go(-1);
    }

}
