import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  compraEntradas() {
    window.location.href = 'https://ventas.autoentrada.com/events/hijos-de-la-fe';
  }
}
