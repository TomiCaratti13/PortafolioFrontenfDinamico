import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-exp-edit',
  templateUrl: './exp-edit.component.html',
  styleUrls: ['./exp-edit.component.css']
})
export class ExpEditComponent implements OnInit{

  cargoExp: string = "";
  empresaExp: string = "";
  fechaExp: string = "";
  descripcionExp: string = "";

  constructor (private serExperiencia: ExperienciaService, private activatedRouted: ActivatedRoute) {}


  ngOnInit(): void {
    // const id = this.activatedRouted.snapshot.params['id'];
    // this.serExperiencia.detail(id).subscribe(data => {
    //     this. = data
    //   }// }, err => {
    //   // alert("Error al editar experiencia")
    // );//});
  }

  onEdit():void {
    
  }

}
