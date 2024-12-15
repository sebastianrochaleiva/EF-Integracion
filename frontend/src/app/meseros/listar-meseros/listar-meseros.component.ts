import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../pages/navbar/navbar.component';
import { Meseros } from '../../models/meseros';
import { MeseroService } from '../../services/mesero.service';
import { NgClass, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../pages/footer/footer.component';


@Component({
  selector: 'app-listar-meseros',
  standalone: true,
  imports: [NavbarComponent, NgFor, NgClass, RouterLink, FooterComponent],
  templateUrl: './listar-meseros.component.html',
  styleUrl: './listar-meseros.component.css'
})
export class ListarMeserosComponent implements OnInit {
  meseros: Meseros[] = [];  // Array para almacenar los meseros

  constructor(private meseroService: MeseroService, private router: Router) { }

  ngOnInit(): void {
    this.cargarMeseros();  // Cargar la lista de meseros al iniciar el componente
  }

  cargarMeseros() {
    this.meseroService.getMeseros().subscribe({
      next: (response: any) => {
        //console.log(response.data);
        this.meseros = response.data;
      },
      error: (error) => {
        console.error('Error al cargar los meseros', error);
      }
    });
  }

  eliminarMesero(id: string | undefined): void {
    if (id) {
      if (confirm('¿Estás seguro de que deseas eliminar este mesero?')) {
        this.meseroService.deleteMesero(id).subscribe({
          next: (response: any) => {
            this.meseros = this.meseros.filter(m => m._id !== id);
          },
          error: (error) => {
            console.error('Error al eliminar el mesero', error);
          }
        });
      }
      this.router.navigate(['/meseros']).then(() => {
        window.location.reload(); 
      });
    } else {
      console.error('ID no válido');
    }
  }

}
