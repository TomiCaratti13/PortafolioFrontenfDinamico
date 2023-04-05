import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: 'registro', component: RegisterComponent},
  {path: 'ingreso', component: LoginComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: 'portafolio/:id', component: PortafolioComponent},
  {path: '', redirectTo: 'portafolio', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
