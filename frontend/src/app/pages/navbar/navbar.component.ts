import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}
  isActive(route: string): boolean {
    if (route === '/updateMesero' && this.router.url.includes('/updateMesero')) {
      return true;
    }
    if (route === '/updateCliente' && this.router.url.includes('/updateCliente')) {
      return true;
    }
    if (route === '/updateCategoria' && this.router.url.includes('/updateCategoria')) {
      return true;
    }
    return this.router.url === route;
  }
}
