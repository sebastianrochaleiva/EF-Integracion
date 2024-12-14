import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Login } from '../models/login';
import { MeseroService } from '../services/mesero.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private datalogin: MeseroService){
    this.loginForm = this.fb.group({
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
    })
  }

  loginUser(){
    const USER: Login = {
      correo: this.loginForm.get('correo')?.value,
      contraseña: this.loginForm.get('contraseña')?.value,
    }

    // Llamamos al servicio para hacer el POST a la API
    this.datalogin.login(USER).subscribe({
      next: (response) => {
        // Si la respuesta es exitosa, redirigimos a la página de inicio
        this.router.navigate(['/home']);
      },
      error: (error) => {
        // Si la solicitud falla, mostramos un mensaje de error
        this.errorMessage = 'Credenciales inválidas. Intente de nuevo.';
      }
    });
  }
}
