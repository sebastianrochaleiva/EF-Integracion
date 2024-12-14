import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MeseroService } from '../../services/mesero.service';
import { Meseros } from '../../models/meseros';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-mesero',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './update-mesero.component.html',
  styleUrl: './update-mesero.component.css'
})
export class UpdateMeseroComponent implements OnInit {
  mesero: Meseros | undefined;
  meseroForm: FormGroup;

  constructor(
    private fb: FormBuilder, private route: ActivatedRoute, private meseroService: MeseroService, private router: Router
  ) {
    this.meseroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
    })
  }

  cargarMesero() {
    const meseroId = this.route.snapshot.paramMap.get('id');

    if (meseroId) {
      this.meseroService.getMesero(meseroId).subscribe({
        next: (response: any) => {
          //console.log(response.data);
          this.mesero = response.data;
          if (this.mesero) {
            this.meseroForm.patchValue({
              nombre: this.mesero.nombre,
              correo: this.mesero.correo,
              telefono: this.mesero.telefono,
            });
          }
        },
        error: (error) => {
          console.error('Error al cargar los datos del mesero', error);
        }
      });
    }
  }

  ngOnInit(): void {
    this.cargarMesero();
  }

  actualizarMesero(): void {
    if (this.meseroForm.valid && this.mesero) {
      const meseroId = this.route.snapshot.paramMap.get('id');
      if (meseroId) {
        const updatedMesero = this.meseroForm.value;

        this.meseroService.updateMesero(meseroId, updatedMesero).subscribe({
          next: (response: any) => {
            console.log('Mesero actualizado exitosamente');
            this.router.navigate(['/meseros']);
          },
          error: (error) => {
            console.error('Error al actualizar el mesero', error);
          }
        });
      }
    }
  }
}
