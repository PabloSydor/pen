import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.scss']
})
export class CardTrabajadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() cliente: Cliente;

  @Output() eventoBorrar = new EventEmitter<string>();

  @Output() eventoLike = new EventEmitter<string>();

  @Output() eventoDislike = new EventEmitter<string>();

  @Output() eventoVer = new EventEmitter();



  borrar(cliente:Cliente){

    this.eventoBorrar.emit(cliente.nombre)

  }

  darLike(cliente: Cliente) {

    this.eventoLike.emit(cliente.nombre)

  }

  darDislike(cliente: Cliente) {
    this.eventoDislike.emit(cliente.nombre);
  }


  ver(cliente: Cliente) {
    this.eventoVer.emit(cliente.nombre);
  }



}
