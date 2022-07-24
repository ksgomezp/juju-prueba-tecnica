import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  get historial(){
    return this.personajesService.historial;
  }

  buscar(item: string){
    this.personajesService.filtrarPersonajes(item);
  }

  limpiarHistorial(){
    localStorage.clear()
    window.location.reload()
  }

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
  }

}
