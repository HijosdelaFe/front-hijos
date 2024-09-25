import { Component } from '@angular/core';
@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {
  selectedInfo: string | null = null;
  contenidoInfo: string | null = null;
  artistasList: string[] = [];

  imagenActual: string = '';

  constructor() {
    this.selectedInfo = 'info1';
    this.mostrarInfo("assets/quienes_somos/contenido/quienes_somos.png", this.selectedInfo);
  }

  mostrarInfo(imagen: string, info: string) {
    this.selectedInfo = info;
    this.imagenActual = imagen;
    console.log("imagenActual: ", this.imagenActual);
  }

  get formattedObjetivos() {
    return this.contenidoInfo?.replace(/\n/g, '<br>');
}
}
