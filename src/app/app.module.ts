import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { InteresesComponent } from './components/intereses/intereses.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { EstudiosComponent } from './components/curriculum/estudios/estudios.component';
import { ExperienciaComponent } from './components/curriculum/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { BotonesEdicionComponent } from './components/botones-edicion/botones-edicion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AcercadeComponent,
    InteresesComponent,
    CurriculumComponent,
    EstudiosComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    BotonesEdicionComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
    ProyectosComponent,
    PortafolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
