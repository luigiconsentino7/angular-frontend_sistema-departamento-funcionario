import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionarios } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-deletar-funcionario',
  templateUrl: './deletar-funcionario.component.html',
  styleUrls: ['./deletar-funcionario.component.css']
})

export class DeletarFuncionarioComponent {

  funcionario!: Funcionarios;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) {}

  DeleteFuncionario(funcionario: Funcionarios){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.funcionarioService.DeleteFuncionario(funcionario, id).subscribe((data) => {
      window.history.go(-1)
    })
  }

  voltar(): any {
    window.history.go(-1);
  }

}
