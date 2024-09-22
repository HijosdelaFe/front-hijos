import { Component } from '@angular/core';
import { quienesSomos } from 'src/assets/quienes_somos/contenido/contenido-quienes_somos';
import { queHacemos } from 'src/assets/quienes_somos/contenido/contenido-quienes_somos';
import { porqueLoHacemos } from 'src/assets/quienes_somos/contenido/contenido-quienes_somos';
import { nuestrosObjetivos } from 'src/assets/quienes_somos/contenido/contenido-quienes_somos';
import { nuestrosValores } from 'src/assets/quienes_somos/contenido/contenido-quienes_somos';
import { artistas } from 'src/assets/quienes_somos/contenido/contenido-quienes_somos';
import { artistasList } from 'src/assets/quienes_somos/contenido/contenido-quienes_somos';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {
  selectedInfo: string | null = null;
  contenidoInfo: string | null = null;
  artistasList: string[] = [];

  constructor() {
    this.selectedInfo = 'info1';
    this.mostrarInfo(this.selectedInfo);
  }

  mostrarInfo(info: string) {
    this.selectedInfo = info;
    if (info == "info1") {
      this.contenidoInfo = quienesSomos;
    }
    if (info == "info2") {
      this.contenidoInfo = queHacemos;
    }
    if (info == "info3") {
      this.contenidoInfo = porqueLoHacemos;
    }
    if (info == "info4") {
      this.contenidoInfo = nuestrosObjetivos;
    }
    if (info == "info5") {
      this.contenidoInfo = nuestrosValores;
    }
    if (info == "info6") {
      this.contenidoInfo = artistas;
      this.artistasList = artistasList;
    }
  }

  get formattedObjetivos() {
    return this.contenidoInfo?.replace(/\n/g, '<br>');
}
}
