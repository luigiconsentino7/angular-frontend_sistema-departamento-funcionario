import { Component, OnInit } from '@angular/core';
import { Departamentos } from 'src/app/models/Departamentos';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirDepartamentoComponent } from 'src/app/components/excluir-departamento/excluir-departamento.component';
import { SituacaoDepartamentoComponent } from 'src/app/components/situacao-departamento/situacao-departamento.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  departamentosList: Departamentos[] = [];
  departamentosListGeral: Departamentos[] = [];

  columns = ['Situacao', 'Id', 'Departamento', 'Sigla', 'Acessar', 'Editar', 'Acoes', 'Excluir']

  constructor(private departamentoService: DepartamentoService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {}

  private handleResponse(data: any): void {
      this.departamentosList = data.$values;
      this.departamentosListGeral = data.$values;
  }

  ngOnInit(): void {
    this.departamentoService.GetAllDepartamentos().subscribe({
      next: data => this.handleResponse(data),
      error: error => console.error('Erro ao obter dados:', error)
    });
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.departamentosList = this.departamentosListGeral.filter(departamento => {
      return departamento.nome.toLowerCase().includes(value);
    });
  }

  OpenDialog(id: number) {
    console.log(2)
    this.dialog.open(ExcluirDepartamentoComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }

  OpenDialogSituacao(id: number) {
    this.dialog.open(SituacaoDepartamentoComponent, {
      width: '450px',
      height: '350px',
      data: {
        id: id
      }
    });
  }

  DisableDepartamento(id: number){
    this.departamentoService.DisableDepartamento(id).subscribe((data) => {
      location.reload()
    });
  }

  EnableDepartamento(departamento: Departamentos, id: number){
    this.departamentoService.EnableDepartamento(departamento, id).subscribe((data) => {
      location.reload()
    });
  }

}
