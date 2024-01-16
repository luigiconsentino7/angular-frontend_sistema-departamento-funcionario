import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroDepartamentoComponent } from './pages/cadastro-departamento/cadastro-departamento.component';
import { DepartamentoFormComponent } from './components/departamento-form/departamento-form.component';
import { EditarDepartamentoComponent } from './pages/editar-departamento/editar-departamento.component';
import { FuncionariosDepartamentoComponent } from './pages/funcionarios-departamento/funcionarios-departamento.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroDepartamentoComponent,
    DepartamentoFormComponent,
    EditarDepartamentoComponent,
    FuncionariosDepartamentoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
