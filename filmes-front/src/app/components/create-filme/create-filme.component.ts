import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { HttpClient, HttpClientModule  } from '@angular/common/http';

@Component({
  selector: 'app-create-filme',
  standalone: true, 
  imports: [ReactiveFormsModule, HttpClientModule], 
  templateUrl: './create-filme.component.html'
})
export class CreateFilmeComponent {
  filmeForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.filmeForm = this.fb.group({
      titulo: [''],
      genero: [''],
      duracao: ['']
    });
  }

  onSubmit() {
    const filme = this.filmeForm.value;
    this.http.post('https://localhost:44332/Filme', filme)
      .subscribe({
        next: (res) => alert('Filme cadastrado com sucesso!'),
        error: (err) => alert('Erro ao cadastrar filme.')
      });
  }
}
