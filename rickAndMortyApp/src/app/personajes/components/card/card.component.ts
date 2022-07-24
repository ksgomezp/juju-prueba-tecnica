import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() personaje!: Personaje;

  constructor() { }

  ngOnInit(): void {
  }

}
