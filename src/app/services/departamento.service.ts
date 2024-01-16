import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamentos } from '../models/Departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrlDepartamentoGetAll = `${environment.ApiUrl}/departamentos/GetAllDepartamentos`
  private apiUrlDepartamentoPost = `${environment.ApiUrl}/departamentos/PostDepartamento`
  private apiUrlDepartamentoUpdate = `${environment.ApiUrl}/departamentos/UpdateDepartamento`
  private apiUrlDepartamentoGetId = `${environment.ApiUrl}/departamentos/GetDepartamentos`


  constructor( private http: HttpClient ) { }

  GetAllDepartamentos(): Observable<Departamentos[]> {
    return this.http.get<Departamentos[]>(this.apiUrlDepartamentoGetAll)
  }

  CreateDepartamento(departamento: Departamentos) : Observable<Departamentos[]> {
    return this.http.post<Departamentos[]>(`${this.apiUrlDepartamentoPost}`, departamento)
  }

  GetDepartamentoId(id : number) : Observable<Departamentos>{
    return this.http.get<Departamentos>(`${this.apiUrlDepartamentoGetId} ${id}`)
  }

  UpdateDepartamento(departamento: Departamentos, id : number) : Observable<Departamentos[]>{
    return this.http.put<Departamentos[]>(`${this.apiUrlDepartamentoUpdate} ${id}`, departamento);
  }

}
