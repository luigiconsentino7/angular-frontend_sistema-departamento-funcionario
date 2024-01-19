import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionarios } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  inputData: any;
  funcionario!: Funcionarios
  imageUrl!: string;
  selectedFile!: File;

  constructor(
    private funcionarioService : FuncionarioService,
    private router : Router,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<UploadComponent>
  ) {}

  ngOnInit(): void {
    this.inputData = this.data

    this.funcionarioService.GetFuncionarioId(this.inputData.id).subscribe((data) => {
      this.funcionario = data;

      console.log(this.funcionario)
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.funcionarioService.UploadImagem(this.selectedFile, this.inputData.id).subscribe({
        next: (response) => {
          this.ref.close();
          window.location.reload()
        },
        error: (error) => {
          console.error('Erro no upload:', error);
        }
      });
    } else {
      console.warn('Nenhum arquivo selecionado.');
    }
  }

  Cancelar(){
    this.ref.close();
  }
}
