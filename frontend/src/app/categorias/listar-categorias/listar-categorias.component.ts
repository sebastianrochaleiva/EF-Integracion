import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../pages/navbar/navbar.component';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../pages/footer/footer.component';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, NgFor, RouterLink],
  templateUrl: './listar-categorias.component.html',
  styleUrl: './listar-categorias.component.css'
})
export class ListarCategoriasComponent {
  categoria: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarCategorias();  // Cargar la lista de meseros al iniciar el componente
  }

  cargarCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (response: any) => {
        //console.log(response.data);
        this.categoria = response.data;
      },
      error: (error) => {
        console.error('Error al cargar las categorias', error);
      }
    });
  }

  eliminarCategoria(id: string | undefined): void {
    if (id) {
      if (confirm('¿Estás seguro de que deseas eliminar este mesero?')) {
        this.categoriaService.deleteCategoria(id).subscribe({
          next: (response: any) => {
            this.categoria = this.categoria.filter(m => m._id !== id);
          },
          error: (error) => {
            console.error('Error al eliminar el mesero', error);
          }
        });
      }
      this.router.navigate(['/categorias']).then(() => {
        window.location.reload(); 
      });
    } else {
      console.error('ID no válido');
    }
  }
}
