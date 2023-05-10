import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-hab-edit',
  templateUrl: './hab-edit.component.html',
  styleUrls: ['./hab-edit.component.css']
})
export class HabEditComponent implements OnInit{

  nombreHys: string = "";
  porcentaje: number = 0;

  constructor (private serHabilidad: HabilidadService) {}

  ngOnInit(): void {
    
  }

  Crear(): void{

  }
}
