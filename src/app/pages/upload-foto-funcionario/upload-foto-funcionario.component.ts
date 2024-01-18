import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upload-foto-funcionario',
  templateUrl: './upload-foto-funcionario.component.html',
  styleUrls: ['./upload-foto-funcionario.component.css']
})
export class UploadFotoFuncionarioComponent {

  imageUrl!: string;
  selectedFile!: File;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedFile) {
      this.funcionarioService.UploadImagem(this.selectedFile, id).subscribe({
        next: (response) => {
          this.router.navigate([''])
        },
        error: (error) => {
          console.error('Erro no upload:', error);
        }
      });
    } else {
      console.warn('Nenhum arquivo selecionado.');
    }
  }



}
