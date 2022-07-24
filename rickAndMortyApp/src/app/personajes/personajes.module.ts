import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { HomeComponent } from './home/home.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { Router, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    ResultadosComponent,
    HomeComponent,
    PersonajeComponent,
    CardComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ]
})
export class PersonajesModule { }
