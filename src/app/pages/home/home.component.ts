import { Component, OnInit } from '@angular/core';
import { Departamentos } from 'src/app/models/Departamentos';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  departamentosList: Departamentos[] = [];
  departamentosListGeral: Departamentos[] = [];

  constructor(private departamentoService: DepartamentoService, private route: ActivatedRoute, private router: Router) {}

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
    })
  }

  DisableDepartamento(id: number){
    this.departamentoService.DisableDepartamento(id).subscribe((data) => {
      this.router.navigate([''])
    })
  }



}
