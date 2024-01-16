import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionarios } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionarios-departamento',
  templateUrl: './funcionarios-departamento.component.html',
  styleUrls: ['./funcionarios-departamento.component.css']
})
export class FuncionariosDepartamentoComponent implements OnInit{


  funcionariosList: Funcionarios[] = [];
  funcionariosListGeral: Funcionarios [] = [];

  funcionario!: Funcionarios;

  constructor( private funcionarioService : FuncionarioService, private route: ActivatedRoute, private router: Router){}

  private handleResponse(data: any): void {
    this.funcionariosList = data.funcionarios.$values;
    this.funcionariosListGeral = data.funcionarios.$values;
    console.log('Funcionários do departamento:', this.funcionariosList);
  }

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.funcionarioService.GetFuncionariosDepartamentoId(id).subscribe({
    next: data => this.handleResponse(data),
    error: error => console.error('Erro ao obter dados:', error)
    });

  }
}
