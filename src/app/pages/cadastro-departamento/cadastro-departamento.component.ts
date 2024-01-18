import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Departamentos } from 'src/app/models/Departamentos';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-cadastro-departamento',
  templateUrl: './cadastro-departamento.component.html',
  styleUrls: ['./cadastro-departamento.component.css']
})

export class CadastroDepartamentoComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Departamento"

  constructor(private departamentoService : DepartamentoService, private router: Router) {}

  createDepartamento(departamento: Departamentos){
    this.departamentoService.CreateDepartamento(departamento).subscribe((data) => {
      this.router.navigate(['/'])
    });
  }

}
