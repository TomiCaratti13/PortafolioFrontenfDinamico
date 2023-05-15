import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ArchivoService } from 'src/app/services/archivo.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-cv-edit',
  templateUrl: './cv-edit.component.html',
  styleUrls: ['./cv-edit.component.css']
})
export class CVEditComponent implements OnInit{
  persona: Persona = null;

  constructor (private serPersona: PersonaService, private activatedRouted: ActivatedRoute,
  public archService: ArchivoService, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.serPersona.detail(id).subscribe(data => {
      this.persona = data
    }, err => {
      alert("Error");
      this.router.navigate(['']);
    });
  }

  Editar(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.persona.curriculum = this.archService.urlarch;
    this.serPersona.update(id, this.persona).subscribe(data =>{
      alert("Banner correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar banner");
      this.router.navigate(['']);
    });
  }

  subirArch($event:any) {
    const id = this.activatedRouted.snapshot.params['id'];
    const name = "Curriculum_" + id;
    this.archService.subirArch($event, name);
  }
}