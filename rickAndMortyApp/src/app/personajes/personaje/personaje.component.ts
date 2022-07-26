import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html'

})
export class PersonajeComponent implements OnInit {

  personaje!: Personaje;

  constructor(private rutaActiva: ActivatedRoute, private personajesService: PersonajesService) { }

  ngOnInit(): void {

    this.rutaActiva.params
      .pipe(
        switchMap(({ id }) => this.personajesService.buscarPersonaje(id))
      ).subscribe(personaje => this.personaje = personaje);
  }
}

