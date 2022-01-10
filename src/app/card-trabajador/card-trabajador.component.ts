import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Trabajador } from '../Modelos/trabajador';

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.scss']
})
export class CardTrabajadorComponent implements OnInit {

  @Input() trabajador: Trabajador;

  @Output() eventoBorrar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  borrar(trabajador:Trabajador){

    this.eventoBorrar.emit(trabajador.nombre)

  }
}
