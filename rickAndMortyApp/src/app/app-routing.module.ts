import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './personajes/home/home.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personajes',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    component: HomeComponent
  },
  {
    path: 'personajes/:id',
    component: PersonajeComponent
  },
  {
    path: '**',
    redirectTo: 'personajes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
