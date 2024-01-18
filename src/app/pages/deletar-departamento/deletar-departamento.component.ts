import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/models/Departamentos';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-deletar-departamento',
  templateUrl: './deletar-departamento.component.html',
  styleUrls: ['./deletar-departamento.component.css']
})
export class DeletarDepartamentoComponent {
  departamento!: Departamentos;

  constructor(private departamentoService: DepartamentoService, private route: ActivatedRoute, private router: Router) {}

  DeleteDepartamento(departamento: Departamentos){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.departamentoService.DeleteDepartamento(departamento, id).subscribe((data) => {
      this.router.navigate([''])
    })
  }
}
