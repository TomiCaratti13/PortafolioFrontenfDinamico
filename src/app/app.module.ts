import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { InteresesComponent } from './components/intereses/intereses.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { Page404Component } from './components/page404/page404.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/inter-service';
import { ExperienciaComponent } from './components/curriculum/experiencia/experiencia.component';
import { EducacionComponent } from './components/curriculum/educacion/educacion.component';
import { ExpAddComponent } from './components/curriculum/experiencia/exp-add/exp-add.component';
import { ExpEditComponent } from './components/curriculum/experiencia/exp-edit/exp-edit.component';
import { ExpDeletComponent } from './components/curriculum/experiencia/exp-delet/exp-delet.component';
import { EduAddComponent } from './components/curriculum/educacion/edu-add/edu-add.component';
import { EduEditComponent } from './components/curriculum/educacion/edu-edit/edu-edit.component';
import { EduDeletComponent } from './components/curriculum/educacion/edu-delet/edu-delet.component';
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AcercadeComponent,
    InteresesComponent,
    CurriculumComponent,
    HabilidadesComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
    ProyectosComponent,
    PortafolioComponent,
    BannerComponent,
    Page404Component,
    FooterComponent,
    LoadingComponent,
    ExperienciaComponent,
    EducacionComponent,
    ExpAddComponent,
    ExpEditComponent,
    ExpDeletComponent,
    EduAddComponent,
    EduEditComponent,
    EduDeletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
