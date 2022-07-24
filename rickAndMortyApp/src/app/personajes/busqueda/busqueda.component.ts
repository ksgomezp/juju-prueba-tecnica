import { Component, ElementRef, ViewChild } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
    `
    .navButton{
      margin-right: 5px;
      margin-top: 5px;
    }
    `
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  get hayError(){
    return this.personajesService.hayError;
  }

  constructor(private personajesService: PersonajesService) { }

  buscar(){
    const valor = this.txtBuscar.nativeElement.value.trim().toLocaleLowerCase();  
    if(valor.length === 0){ return;}  
    this.personajesService.filtrarPersonajes(valor);
    this.txtBuscar.nativeElement.value = '';
    
  }

  genero(genero:string){
    this.personajesService.getPersonajes('',genero)
  }

  estado(estado:string){
    this.personajesService.getPersonajes(estado)

  }


}
