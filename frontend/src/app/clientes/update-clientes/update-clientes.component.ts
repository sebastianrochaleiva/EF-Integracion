import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../pages/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Clientes } from '../../models/clientes';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../pages/footer/footer.component';

@Component({
  selector: 'app-update-cliente',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './update-clientes.component.html',
  styleUrl: './update-clientes.component.css'
})
export class UpdateClienteComponent implements OnInit {
  cliente: Clientes | undefined;
  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder, private route: ActivatedRoute, private clienteService: ClienteService, private router: Router
  ) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
    })
  }

  cargarCliente() {
    const clienteId = this.route.snapshot.paramMap.get('id');

    if (clienteId) {
      this.clienteService.getCliente(clienteId).subscribe({
        next: (response: any) => {
          console.log('Respuesta del servidor:', response);
          this.cliente = response; // Aquí no asumimos que 'data' existe
          if (this.cliente) {
              this.clienteForm.patchValue({
                  nombre: this.cliente.nombre,
                  correo: this.cliente.correo,
                  dni: this.cliente.dni,
                  telefono: this.cliente.telefono,
              });
          }
      },
        error: (error) => {
          console.error('Error al cargar los datos del cliente', error);
        }
      });
    }
  }

  ngOnInit(): void {
    this.cargarCliente();
  }

  actualizarCliente(): void {
    if (this.clienteForm.valid && this.cliente) {
      const clienteId = this.route.snapshot.paramMap.get('id');
      if (clienteId) {
        const updatedCliente = this.clienteForm.value;

        this.clienteService.updateCliente(clienteId, updatedCliente).subscribe({
          next: (response: any) => {
            console.log('Cliente actualizado exitosamente');
            this.router.navigate(['/clientes']);
          },
          error: (error) => {
            console.error('Error al actualizar el cliente', error);
          }
        });
      }
    }
  }
}
