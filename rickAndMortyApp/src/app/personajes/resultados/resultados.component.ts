import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  page: number = 1;
  pageSum: number = 1;
  get personajes() {
    return this.personajesService.personajes;

  }

  pageChanged(event: number) {
    if (this.pageSum == 1 && event == -1) {
      return;
    }
    this.pageSum += event;
    this.personajesService.getPersonajes('', '', this.pageSum.toString());

  }


  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
  }

}
