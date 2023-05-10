import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edu-edit',
  templateUrl: './edu-edit.component.html',
  styleUrls: ['./edu-edit.component.css']
})
export class EduEditComponent {

  tituloEdu: string = "";
  instiEdu: string = "";
  fechaEdu: string = "";
  descripcionEdu: string = "";

  constructor (private serEducacion: EducacionService , private activatedRouted: ActivatedRoute) {}

  onEdit(): void {

  }
}
