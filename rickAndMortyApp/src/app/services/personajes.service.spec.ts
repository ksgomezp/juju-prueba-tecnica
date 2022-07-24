import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { PersonajesService } from './personajes.service';
import { Personaje, Status, Species, Gender } from '../personajes/interfaces/personaje.interface';

describe('PersonajesService', () => {

   const mockResponse: Personaje  = {
    id: 1,
    name: "Rick Sanchez",
    status: Status.Alive,
    species: Species.Human,
    type: "",
    gender: Gender.Male,
    origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
    },
    location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51"
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: new Date("2017-11-04T18:48:46.250Z")
  }

  let service: PersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonajesService]
    });
    service = TestBed.inject(PersonajesService);
  });

  it('Servicio creado exitosamente', () => { 
    expect(service).toBeTruthy();
  });

  it('Revisión busqueda de personaje', () => {
    var personajeA: Personaje= mockResponse;
   var a = service.buscarPersonaje("1").subscribe(resp => {
       personajeA = resp;
    });
    expect(mockResponse).toEqual(personajeA);
  });
});
