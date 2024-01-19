import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroDepartamentoComponent } from './pages/cadastro-departamento/cadastro-departamento.component';
import { EditarDepartamentoComponent } from './pages/editar-departamento/editar-departamento.component';
import { FuncionariosDepartamentoComponent } from './pages/funcionarios-departamento/funcionarios-departamento.component';
import { CadastroFuncionarioComponent } from './pages/cadastro-funcionario/cadastro-funcionario.component';
import { EditarFuncionarioComponent } from './pages/editar-funcionario/editar-funcionario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro-departamento', component: CadastroDepartamentoComponent },
  { path: 'editar-departamento/:id', component: EditarDepartamentoComponent },
  { path: 'funcionarios-departamento/:id', component: FuncionariosDepartamentoComponent },
  { path: 'cadastro-funcionario', component: CadastroFuncionarioComponent },
  { path: 'editar-funcionario/:id', component: EditarFuncionarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
