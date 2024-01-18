import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamentos } from 'src/app/models/Departamentos';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})

export class EditarDepartamentoComponent implements OnInit {

  btnAcao: string = "Editar"
  btnTitulo: string = "Editar Departamento"
  departamento!: Departamentos;

  constructor(private departamentoService : DepartamentoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(id)
      this.departamentoService.GetDepartamentoId(id).subscribe((data)=> {
        this.departamento = data;
      })
  }

  editarDepartamento(departamento: Departamentos) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.departamentoService.UpdateDepartamento(departamento, id).subscribe((data) => {
      this.router.navigate(['/'])
    });
  }

}
