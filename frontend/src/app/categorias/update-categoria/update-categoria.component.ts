import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../pages/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../pages/footer/footer.component';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';
@Component({
  selector: 'app-update-categoria',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './update-categoria.component.html',
  styleUrl: './update-categoria.component.css'
})
export class UpdateCategoriaComponent implements OnInit {
  categoria: Categoria | undefined;
  categoriaForm: FormGroup;

  constructor(
    private fb: FormBuilder, private route: ActivatedRoute, private categoriaService: CategoriaService, private router: Router
  ) {
    this.categoriaForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  cargarCategoria() {
    const categoriaId = this.route.snapshot.paramMap.get('id');

    if (categoriaId) {
      this.categoriaService.getCategoria(categoriaId).subscribe({
        next: (response: any) => {
          //console.log(response.data);
          this.categoria = response.data;
          if (this.categoria) {
            this.categoriaForm.patchValue({
              nombre: this.categoria.nombre,
              descripcion: this.categoria.descripcion,
            });
          }
        },
        error: (error) => {
          console.error('Error al cargar los datos de la categoria', error);
        }
      });
    }
  }

  ngOnInit(): void {
    this.cargarCategoria();
  }

  actualizarCategoria(): void {
    if (this.categoriaForm.valid && this.categoria) {
      const categoriaId = this.route.snapshot.paramMap.get('id');
      if (categoriaId) {
        const updatedCategoria = this.categoriaForm.value;

        this.categoriaService.updateCategoria(categoriaId, updatedCategoria).subscribe({
          next: (response: any) => {
            console.log('Categoria actualizada exitosamente');
            this.router.navigate(['/categorias']);
          },
          error: (error) => {
            console.error('Error al actualizar la categoria', error);
          }
        });
      }
    }
  }
}
