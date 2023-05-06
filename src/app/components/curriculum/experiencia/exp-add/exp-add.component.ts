import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SerExperienciaService } from 'src/app/services/ser-experiencia.service';

@Component({
  selector: 'app-exp-add',
  templateUrl: './exp-add.component.html',
  styleUrls: ['./exp-add.component.css']
})
export class ExpAddComponent implements OnInit{
  cargoExp: string = "";
  empresaExp: string = "";
  fechaExp: string = "";
  descripcionExp: string = "";

  constructor (private serExperiencia: SerExperienciaService) {}

  ngOnInit(): void {

  }

  onCreate(): void {
    const exp = new Experiencia(this.cargoExp, this.empresaExp, this.fechaExp, this.descripcionExp);
    this.serExperiencia.save(exp).subscribe(data => {
      alert("Experiencia agregada");
    }, err => {
      alert("Error");
    });
  }
}
