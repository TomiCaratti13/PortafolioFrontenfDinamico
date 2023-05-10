import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-hab-add',
  templateUrl: './hab-add.component.html',
  styleUrls: ['./hab-add.component.css']
})
export class HabAddComponent implements OnInit{

  nombreHys: string = "";
  porcentaje: number = 0;

  constructor (private serHabilidad: HabilidadService) {}

  ngOnInit(): void {
    
  }

  Crear(): void{

  }
}
