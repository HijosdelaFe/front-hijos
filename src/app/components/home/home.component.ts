import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  compraEntradas() {
    window.location.href = 'https://mariastudios.org/producto/hijos-de-la-fe-2025/';
  }
}
