import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje, RickAndMortyApiResponse } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.personajesService.getPersonajes();
  }

}
