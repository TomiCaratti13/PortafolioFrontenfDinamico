import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect-add',
  templateUrl: './proyect-add.component.html',
  styleUrls: ['./proyect-add.component.css']
})
export class ProyectAddComponent {

  nombrePro: string = "";
  autorPro: string = "";
  descripcionPro: string = "";
  imgPro: string = "";
  urlLive: string = "";
  urlRepo: string = "";

  Crear(): void {
  }
}
