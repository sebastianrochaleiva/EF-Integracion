import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MeseroService } from '../../services/mesero.service';
import { Meseros } from '../../models/meseros';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-add-meseros',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NavbarComponent],
  templateUrl: './add-meseros.component.html',
  styleUrl: './add-meseros.component.css'
})
export class AddMeserosComponent {
  addMeseroForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private dataAdd: MeseroService) {
    this.addMeseroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
      telefono: ['', Validators.required],
      activo: [true],
    })
  }

  addMesero() {
    const mesero: Meseros = {
      nombre: this.addMeseroForm.get('nombre')?.value,
      correo: this.addMeseroForm.get('correo')?.value,
      contraseña: this.addMeseroForm.get('contraseña')?.value,
      telefono: this.addMeseroForm.get('telefono')?.value,
      activo: this.addMeseroForm.get('activo')?.value,
    }

    // Llamamos al servicio para hacer el POST a la API
    this.dataAdd.addMesero(mesero).subscribe({
      next: (response: any) => {
        this.router.navigate(['/meseros']);
      },
      error: (error: any) => {
        // Si la solicitud falla, mostramos un mensaje de error
        this.errorMessage = 'Error al añadir. Intente de nuevo.';
      }
    });
  }
}
