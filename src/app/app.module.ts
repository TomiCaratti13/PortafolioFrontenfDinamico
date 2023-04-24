import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { InteresesComponent } from './components/intereses/intereses.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { BotonesEdicionComponent } from './components/botones-edicion/botones-edicion.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AcercadeComponent,
    InteresesComponent,
    CurriculumComponent,
    HabilidadesComponent,
    BotonesEdicionComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
    ProyectosComponent,
    PortafolioComponent,
    BannerComponent,
    Page404Component,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
