import { Component } from '@angular/core';
import {Trabajador} from './Modelos/trabajador'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Listado de trabajadores';
  nombre = "Pablo";

 trabajadores:Array<Trabajador>=[
    {
      nombre: 'ana',
      cargo: 'Jefa' ,
      descripcion: 'Responsable Administración',
      foto:'ana.jpg'
    },
    {
      nombre: 'elena',
      cargo: 'Jefa',
      descripcion: 'Responsable Administración',
      foto:'elena.jpg'
    },
    {
      nombre: 'juan',
      cargo: 'Jefa' ,
      descripcion: 'Responsable Administración',
      foto:'juan.jpg'
    },
    {
      nombre: 'luis',
      cargo: 'Jefa' ,
      descripcion: 'Responsable Administración',
      foto:'luis.jpg'
    },
    {
      nombre: 'maria',
      cargo: 'Jefa' ,
      descripcion: 'Responsable Administración',
      foto:'maria.jpg'
    },
    {
      nombre: 'pedro',
      cargo: 'Jefa' ,
      descripcion: 'Responsable Administración',
      foto:'pedro.jpg'
    },
    {
      nombre: 'pepe',
      cargo: 'Jefa' ,
      descripcion: 'Responsable Administración',
      foto:'pepe.jpg'
    },
    {
      nombre: 'rosa',
      cargo: 'Jefa' ,
      descripcion: 'Responsable Administración',
      foto:'rosa.jpg'
    }
 ];

borrarTrabajador(nombre:string){
  alert ("Borrar el usuario : "+ nombre + "?");
  let pos=this.trabajadores.findIndex(t=>t.nombre==nombre);
  this.trabajadores.splice(pos,1)
}

}
