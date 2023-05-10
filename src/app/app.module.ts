import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { interceptorProvider } from './services/inter-service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/curriculum/experiencia/experiencia.component';
import { EducacionComponent } from './components/curriculum/educacion/educacion.component';
import { ExpAddComponent } from './components/curriculum/experiencia/exp-add/exp-add.component';
import { ExpEditComponent } from './components/curriculum/experiencia/exp-edit/exp-edit.component';
import { ExpDeletComponent } from './components/curriculum/experiencia/exp-delet/exp-delet.component';
import { EduAddComponent } from './components/curriculum/educacion/edu-add/edu-add.component';
import { EduEditComponent } from './components/curriculum/educacion/edu-edit/edu-edit.component';
import { EduDeletComponent } from './components/curriculum/educacion/edu-delet/edu-delet.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { BotonAddComponent } from './components/edicion/boton-add/boton-add.component';
import { BotonDeletComponent } from './components/edicion/boton-delet/boton-delet.component';
import { BotonEditComponent } from './components/edicion/boton-edit/boton-edit.component';
import { PersonaComponent } from './components/acercade/persona/persona.component';
import { PersonaEditComponent } from './components/acercade/persona-edit/persona-edit.component';
import { HabEditComponent } from './components/habilidades/hab-edit/hab-edit.component';
import { HabDeletComponent } from './components/habilidades/hab-delet/hab-delet.component';
import { HabAddComponent } from './components/habilidades/hab-add/hab-add.component';
import { HabHysComponent } from './components/habilidades/hab-hys.component';
import { ProyectAddComponent } from './components/proyectos/proyect-add/proyect-add.component';
import { ProyectDeletComponent } from './components/proyectos/proyect-delet/proyect-delet.component';
import { ProyectEditComponent } from './components/proyectos/proyect-edit/proyect-edit.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HeaderComponent, AcercadeComponent,CurriculumComponent, LoginComponent,
    ProyectosComponent, PortafolioComponent, BannerComponent,FooterComponent, ExperienciaComponent,
    EducacionComponent, ExpAddComponent, ExpEditComponent, ExpDeletComponent, EduAddComponent, EduEditComponent,
    EduDeletComponent, EdicionComponent, BotonAddComponent, BotonDeletComponent, BotonEditComponent,
    PersonaComponent, PersonaEditComponent, HabEditComponent, HabDeletComponent, HabAddComponent, HabHysComponent,
    ProyectAddComponent, ProyectDeletComponent, ProyectEditComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
