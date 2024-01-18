import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamentos } from 'src/app/models/Departamentos';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css']
})

export class DepartamentoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Departamentos>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosDepartamento: Departamentos | null = null;

  departamentoForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {

      this.departamentoForm = new FormGroup({
        nome: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.nome : '', [Validators.required]),
        sigla: new FormControl(this.dadosDepartamento ? this.dadosDepartamento.sigla : '' , [Validators.required])
      })

  }

  submit(){
    console.log(this.departamentoForm.value)
    this.onSubmit.emit(this.departamentoForm.value);
  }

}
