import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect-edit',
  templateUrl: './proyect-edit.component.html',
  styleUrls: ['./proyect-edit.component.css']
})
export class ProyectEditComponent {

  nombrePro: string = "";
  autorPro: string = "";
  descripcionPro: string = "";
  imgPro: string = "";
  urlLive: string = "";
  urlRepo: string = "";

  Editar(): void {
  }
}
