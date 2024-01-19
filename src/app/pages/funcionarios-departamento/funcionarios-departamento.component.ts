import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcluirFuncionarioComponent } from 'src/app/components/excluir-funcionario/excluir-funcionario.component';
import { Funcionarios } from 'src/app/models/Funcionarios';
import { MatDialog } from '@angular/material/dialog';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { UploadComponent } from 'src/app/components/upload/upload.component';
import { SituacaoFuncionarioComponent } from 'src/app/components/situacao-funcionario/situacao-funcionario.component';

@Component({
  selector: 'app-funcionarios-departamento',
  templateUrl: './funcionarios-departamento.component.html',
  styleUrls: ['./funcionarios-departamento.component.css']
})

export class FuncionariosDepartamentoComponent implements OnInit{

  funcionariosList: Funcionarios[] = [];
  funcionariosListGeral: Funcionarios [] = [];
  funcionario!: Funcionarios;

  constructor( private funcionarioService : FuncionarioService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog){}

  private handleResponse(data: any): void {
    this.funcionariosList = data.funcionarios.$values;
    this.funcionariosListGeral = data.funcionarios.$values;
    console.log('Funcionários do departamento:', this.funcionariosList);
  }

  columns = ['Situacao', 'Foto', 'DepartamentoId', 'Id', 'Nome', 'Sobrenome', 'Rg', 'Editar', 'Upload', 'Acoes', 'Excluir']

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.GetFuncionariosDepartamentoId(id).subscribe({
      next: data => this.handleResponse(data),
      error: error => console.error('Erro ao obter dados:', error)
    });
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.funcionariosList = this.funcionariosListGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  }

  OpenDialog(id: number) {
    this.dialog.open(ExcluirFuncionarioComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }

  OpenDialogUpload(id: number) {
    this.dialog.open(UploadComponent, {
      width: '450px',
      height: '350px',
      data: {
        id: id
      }
    });
  }

  OpenDialogSituacao(id: number) {
    this.dialog.open(SituacaoFuncionarioComponent, {
      width: '450px',
      height: '350px',
      data: {
        id: id
      }
    });
  }

  DisableFuncionario(id: number){
    this.funcionarioService.DisableFuncionario(id).subscribe((data) => {
      location.reload()
    })
  }

  EnableFuncionario(funcionario: Funcionarios, id: number){
    this.funcionarioService.EnableFuncionario(funcionario, id).subscribe((data) => {
      location.reload()
    })
  }

}
