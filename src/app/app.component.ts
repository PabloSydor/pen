import { Component } from '@angular/core';
import { Cliente } from './models/Cliente';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router,
              private aRoute: ActivatedRoute) {

  }

  // nombre: string = this.aRoute.snapshot.params.nombre;


//   title = 'Clientes';

//   clientes: Cliente[] =[
//     {
//       nombre: 'ana',
//       cargo: 'Jefa' ,
//       descripcion: 'Responsable Administración',
//       foto:'ana.jpg',
//       votos: 0
//     },
//     {
//       nombre: 'elena',
//       cargo: 'Jefa',
//       descripcion: 'Responsable Administración',
//       foto:'elena.jpg',
//       votos: 0
//     },
//     {
//       nombre: 'juan',
//       cargo: 'Jefa' ,
//       descripcion: 'Responsable Administración',
//       foto:'juan.jpg',
//       votos: 0
//     },
//     {
//       nombre: 'luis',
//       cargo: 'Jefa' ,
//       descripcion: 'Responsable Administración',
//       foto:'luis.jpg',
//       votos: 0
//     },
//     {
//       nombre: 'maria',
//       cargo: 'Jefa' ,
//       descripcion: 'Responsable Administración',
//       foto:'maria.jpg',
//       votos: 0
//     },
//     {
//       nombre: 'pedro',
//       cargo: 'Jefa' ,
//       descripcion: 'Responsable Administración',
//       foto:'pedro.jpg',
//       votos: 0
//     },
//     {
//       nombre: 'pepe',
//       cargo: 'Jefa' ,
//       descripcion: 'Responsable Administración',
//       foto:'pepe.jpg',
//       votos: 0
//     },
//     {
//       nombre: 'rosa',
//       cargo: 'Jefa' ,
//       descripcion: 'Responsable Administración',
//       foto:'rosa.jpg',
//       votos: 0
//     }
//  ];

// borrarCliente(nombre:string){
//   alert ("Borrado cliente: "+ nombre);
//   let pos=this.clientes.findIndex(t=>t.nombre==nombre);
//   this.clientes.splice(pos,1);
// }



// likear(nombre: string) {
//   let pos = this.clientes.findIndex(t=> t.nombre == nombre);
//   this.clientes[pos].votos++;
// }

// deletear(nombre: string) {
//   let pos = this.clientes.findIndex(c => c.nombre == nombre);
//   // if (this.clientes[pos].votos > 0) {
//     this.clientes[pos].votos--;
//   // }
// }


// veer(nombre: string) {
//   this.router.navigateByUrl("/cliente/" + nombre);
// }








}

