import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Funcionarios } from '../models/Funcionarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrlFuncionarioGetAll = `${environment.ApiUrl}/funcionarios/GetAllFuncionarios`
  private apiUrlFuncionariosDepartamentoGetId = `${environment.ApiUrl}/departamentos/GetDepartamentos`
  private apiUrlDepartamentoPost = `${environment.ApiUrl}/funcionarios/PostFuncionario`

  constructor( private http: HttpClient) { }

  GetAllFuncionarios(): Observable<Funcionarios[]> {
    return this.http.get<Funcionarios[]>(this.apiUrlFuncionarioGetAll)
  }

  GetFuncionariosDepartamentoId(id: number): Observable<Funcionarios> {
    return this.http.get<Funcionarios>(`${this.apiUrlFuncionariosDepartamentoGetId} ${id}`);
  }


  CreateDepartamento(funcionario: Funcionarios) : Observable<Funcionarios[]> {
    return this.http.post<Funcionarios[]>(`${this.apiUrlDepartamentoPost}`, funcionario)
  }
}
