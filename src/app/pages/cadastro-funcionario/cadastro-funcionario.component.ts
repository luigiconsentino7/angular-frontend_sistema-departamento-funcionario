import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionarios } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent {
  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Funcionário"

  constructor(private funcionarioService : FuncionarioService, private router: Router){

  }


  createFuncionario(funcionario: Funcionarios){
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
    });
  }
}
