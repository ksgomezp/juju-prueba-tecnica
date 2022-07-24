import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personaje, RickAndMortyApiResponse } from '../personajes/interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  
  baseUrl: string = 'https://rickandmortyapi.com/api';

  personajes: Personaje[] = [];

  status: string = '';
  gender: string = '';

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  hayError: boolean = false;

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.personajes = JSON.parse(localStorage.getItem('personajes')!) || [];
   }

  getPersonajes(status: string = '', gender: string = ''){
    this.http.get<RickAndMortyApiResponse>(`${this.baseUrl}/character/?status=${status}&gender=${gender}`)
        .subscribe(resp => this.personajes = resp.results);
  }

  

  filtrarPersonajes(termino:string){
    this.hayError = false;
    if(!(this._historial.includes(termino))){
      this._historial.unshift(termino);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    this.http.get<RickAndMortyApiResponse>(`${this.baseUrl}/character/?name=${termino}`)
        .subscribe(resp => {
          this.personajes = resp.results
        }, (err) => {
            this.hayError = true;
            this.getPersonajes();
        });
  }

  buscarPersonaje(id: string){
    return this.http.get<Personaje>(`${this.baseUrl}/character/${id}`);
  }
}
