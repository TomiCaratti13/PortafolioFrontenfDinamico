import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    public imgService: ImagenesService, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.serPersona.detail(id).subscribe(data => {
        this.persona = data
    }, err => {
      alert("Error")
    });
  }

  editar(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.persona.imgPerfil = this.imgService.url;
    this.serPersona.update(id, this.persona).subscribe(data =>{
      alert("Editado correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar persona");
      this.router.navigate(['']);
    });
  }

  subirImg($event:any) {
    const id = this.activatedRouted.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imgService.subirImg($event, name);
  }
}
