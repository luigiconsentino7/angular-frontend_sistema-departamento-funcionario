import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionarios } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent {
  funcionario!: Funcionarios;
  btnAcao: string = "Editar"
  btnTitulo: string = "Editar Funcionario"


  constructor(private funcionarioService : FuncionarioService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(id)
      this.funcionarioService.GetFuncionarioId(id).subscribe((data)=> {
        this.funcionario = data;

      })
  }

  editarFuncionario(funcionario: Funcionarios) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.UpdateFuncionario(funcionario, id).subscribe((data) => {
      this.router.navigate([`/funcionarios-departamento/${funcionario.departamentoId}`])
    });
  }



}
