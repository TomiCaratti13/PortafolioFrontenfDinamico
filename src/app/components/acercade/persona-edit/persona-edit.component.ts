import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit{
  persona: Persona = new Persona("","","","","","");

  constructor (private serPersona: PersonaService, private activatedRouted: ActivatedRoute,
              public imgService: ImagenesService) {}

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.serPersona.detail(id).subscribe(
      data =>{
        this.persona = data
      }, err => {
      alert("Error al editar")
      }
    );
  }

  editar(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.serPersona.update(id, this.persona).subscribe(data =>{
      alert("Editado correctamente")
    }, err => {
      alert("Erroral editar")
    });
  }

  subirImg($event:any) {
    const id = this.activatedRouted.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imgService.subirImg($event, name);
  }
}
