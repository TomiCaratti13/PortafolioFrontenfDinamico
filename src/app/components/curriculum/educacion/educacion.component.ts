import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  edu: Educacion[] = [];

  ModoAdd: boolean = false;
  ModoEdit: boolean = false;

  constructor(private serEducacion: EducacionService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.serEducacion.lista().subscribe(data => {
      this.edu = data
    });
  }

}
