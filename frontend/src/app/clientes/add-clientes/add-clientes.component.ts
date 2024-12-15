import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';
import { Clientes } from '../../models/clientes';
import { NavbarComponent } from '../../pages/navbar/navbar.component';
import { FooterComponent } from '../../pages/footer/footer.component';

@Component({
  selector: 'app-add-clientes',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './add-clientes.component.html',
  styleUrl: './add-clientes.component.css'
})
export class AddClientesComponent {
  addClienteForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private dataAdd: ClienteService) {
    this.addClienteForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
    })
  }

  addCliente() {
    const cliente: Clientes = {
      nombre: this.addClienteForm.get('nombre')?.value,
      correo: this.addClienteForm.get('correo')?.value,
      dni: this.addClienteForm.get('dni')?.value,
      telefono: this.addClienteForm.get('telefono')?.value,
    }

    this.dataAdd.addCliente(cliente).subscribe({
      next: (response: any) => {
        this.router.navigate(['/clientes']);
      },
      error: (error: any) => {
        this.errorMessage = 'Error al añadir. Intente de nuevo.';
      }
    });
  }
}
