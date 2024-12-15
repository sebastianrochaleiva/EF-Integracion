import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { NavbarComponent } from '../../pages/navbar/navbar.component';
import { FooterComponent } from '../../pages/footer/footer.component';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';


@Component({
  selector: 'app-add-categorias',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './add-categorias.component.html',
  styleUrl: './add-categorias.component.css'
})
export class AddCategoriasComponent {
  addCategoriaForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private dataAdd: CategoriaService) {
    this.addCategoriaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  addCategoria() {
    const categoria: Categoria = {
      nombre: this.addCategoriaForm.get('nombre')?.value,
      descripcion: this.addCategoriaForm.get('descripcion')?.value,
    }

    this.dataAdd.addCategoria(categoria).subscribe({
      next: (response: any) => {
        this.router.navigate(['/categorias']);
      },
      error: (error: any) => {
        this.errorMessage = 'Error al añadir. Intente de nuevo.';
      }
    });
  }
}
