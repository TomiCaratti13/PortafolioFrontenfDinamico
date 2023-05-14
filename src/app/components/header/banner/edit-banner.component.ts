import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit{
  persona: Persona = null;

  constructor (private serPersona: PersonaService, private activatedRouted: ActivatedRoute,
    public imgService: ImagenesService, private router: Router) {}

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
      this.persona.imgBanner = this.imgService.url;
      this.serPersona.update(id, this.persona).subscribe(data =>{
        alert("Banner correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar banner");
        this.router.navigate(['']);
      });
    }
  
    subirImg($event:any) {
      const id = this.activatedRouted.snapshot.params['id'];
      const name = "Banner_" + id;
      this.imgService.subirImg($event, name);
    }
}