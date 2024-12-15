import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../pages/navbar/navbar.component';
import { Clientes } from '../../models/clientes';
import { ClienteService } from '../../services/cliente.service';
import { NgClass, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../pages/footer/footer.component';


@Component({
  selector: 'app-listar-clientes',
  standalone: true,
  imports: [NavbarComponent, NgFor, NgClass, RouterLink, FooterComponent],
  templateUrl: './listar-clientes.component.html',
  styleUrl: './listar-clientes.component.css'
})
export class ListarClientesComponent implements OnInit {
  clientes: Clientes[] = [];  // Array para almacenar los clientes

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.cargarClientes();  // Cargar la lista de meseros al iniciar el componente
  }

  cargarClientes() {
    this.clienteService.getClientes().subscribe({
      next: (response: any) => {
        //console.log(response.data);
        this.clientes = response.data;
      },
      error: (error) => {
        console.error('Error al cargar los clientes', error);
      }
    });
  }

  eliminarCliente(id: string | undefined): void {
    if (id) {
      if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
        this.clienteService.deleteCliente(id).subscribe({
          next: (response: any) => {
            this.clientes = this.clientes.filter(c => c._id !== id);
          },
          error: (error) => {
            console.error('Error al eliminar el cliente', error);
          }
        });
      }
      this.router.navigate(['/clientes']).then(() => {
        window.location.reload(); 
      });
    } else {
      console.error('ID no válido');
    }
  }

}
