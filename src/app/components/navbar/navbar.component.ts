import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }
  
  isHome(): boolean {
    return this.router.url === '/'; // Comprueba si está en la ruta Home
  }

  isQuienesSomos(): boolean {
    return this.router.url === '/quienes-somos'; // Comprueba si está en la ruta Quienes Somos
  }
}
