import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Funcionarios } from '../models/Funcionarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  imageUrl!: string;

  private apiUrlFuncionarioGetAll = `${environment.ApiUrl}/funcionarios/GetAllFuncionarios`
  private apiUrlFuncionariosDepartamentoGetId = `${environment.ApiUrl}/departamentos/GetDepartamentos`
  private apiUrlFuncionarioGetId = `${environment.ApiUrl}/funcionarios/GetFuncionario`
  private apiUrlFuncionarioPost = `${environment.ApiUrl}/funcionarios/PostFuncionario`
  private apiUrlFuncionarioUpdate = `${environment.ApiUrl}/funcionarios/UpdateFuncionario`
  private apiUrlFuncionarioDisable = `${environment.ApiUrl}/funcionarios/DisableFuncionario`
  private apiUrlFuncionarioEnable = `${environment.ApiUrl}/funcionarios/EnableFuncionario`
  private apiUrlFuncionarioDelete = `${environment.ApiUrl}/funcionarios/DeleteFuncionario`
  private apiUrlUploadImagemId = `${environment.ApiUrl}/funcionarios/UploadImagem`

  constructor( private http: HttpClient) { }

  GetAllFuncionarios(): Observable<Funcionarios[]> {
    return this.http.get<Funcionarios[]>(this.apiUrlFuncionarioGetAll)
  }

  GetFuncionariosDepartamentoId(id: number): Observable<Funcionarios> {
    return this.http.get<Funcionarios>(`${this.apiUrlFuncionariosDepartamentoGetId} ${id}`);
  }

  GetFuncionarioId(id: number): Observable<Funcionarios> {
    return this.http.get<Funcionarios>(`${this.apiUrlFuncionarioGetId} ${id}`);
  }

  CreateFuncionario(funcionario: Funcionarios) : Observable<Funcionarios[]> {
    return this.http.post<Funcionarios[]>(`${this.apiUrlFuncionarioPost}`, funcionario)
  }

  UpdateFuncionario(funcionario: Funcionarios, id : number) : Observable<Funcionarios[]>{
    return this.http.put<Funcionarios[]>(`${this.apiUrlFuncionarioUpdate} ${id}`, funcionario);
  }

  DisableFuncionario(id: number) : Observable<Funcionarios[]>{
    return this.http.delete<Funcionarios[]>(`${this.apiUrlFuncionarioDisable} ${id}`);
  }

  EnableFuncionario(funcionario: Funcionarios, id: number) : Observable<Funcionarios[]>{
    return this.http.post<Funcionarios[]>(`${this.apiUrlFuncionarioEnable} ${id}`, funcionario);
  }

  DeleteFuncionario(id : number) : Observable<Funcionarios[]>{
    return this.http.delete<Funcionarios[]>(`${this.apiUrlFuncionarioDelete} ${id}`);
  }

  UploadImage(file: File, id : number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.apiUrlUploadImagemId}/${id}`, formData);
  }

}
