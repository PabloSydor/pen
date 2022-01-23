import { Injectable } from '@angular/core';
import { Cliente } from '../Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Ana',
      cargo: 'Jefa',
      descripcion: 'Responsable Administración',
      foto: 'ana.jpg'
    },
    {
      id: 2,
      nombre: 'Elena',
      cargo: 'Jefa',
      descripcion: 'Responsable Administración',
      foto: 'elena.jpg'
    },
    {
      id: 3,
      nombre: 'Juan',
      cargo: 'Jefa',
      descripcion: 'Responsable Administración',
      foto: 'juan.jpg'
    },
    {
      id: 4,
      nombre: 'Luis',
      cargo: 'Jefa',
      descripcion: 'Responsable Administración',
      foto: 'luis.jpg'
    },
    {
      id: 5,
      nombre: 'Maria',
      cargo: 'Jefa',
      descripcion: 'Responsable Administración',
      foto: 'maria.jpg'
    },
    {
      id: 6,
      nombre: 'Pedro',
      cargo: 'Jefa',
      descripcion: 'Responsable Administración',
      foto: 'pedro.jpg'
    },
    {
      id: 7,
      nombre: 'Pepe',
      cargo: 'Jefa',
      descripcion: 'Responsable Administración',
      foto: 'pepe.jpg'
    },
    {
      id: 8,
      nombre: 'Rosa',
      cargo: 'Jefa',
      descripcion: 'Responsable Administración',
      foto: 'rosa.jpg'
    }
  ];


  constructor() { }


  public getClientes() {
    return this.clientes;
  }

  public getCliente(id: any) {
    let pos=this.clientes.findIndex(t=>t.id==id);
    return this.clientes[pos];
  }

  public borrarCliente(id: any) {
    let pos=this.clientes.findIndex(t=>t.id==id);
    this.clientes.splice(pos, 1);
  }

  public editarCliente(id: any, cliente: Cliente) {
    let pos=this.clientes.findIndex(t=>t.id==id);
    this.clientes[pos] = cliente;
  }

  public newCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }


}




// clientes: Cliente[] = [
//   {
//     id: 1,
//     nombre: 'Ana',
//     cargo: 'Jefa',
//     descripcion: 'Responsable Administración',
//     foto: 'ana.jpg'
//   },
//   {
//     id: 2,
//     nombre: 'Elena',
//     cargo: 'Jefa',
//     descripcion: 'Responsable Administración',
//     foto: 'elena.jpg'
//   },
//   {
//     id: 3,
//     nombre: 'Juan',
//     cargo: 'Jefa',
//     descripcion: 'Responsable Administración',
//     foto: 'juan.jpg'
//   },
//   {
//     id: 4,
//     nombre: 'Luis',
//     cargo: 'Jefa',
//     descripcion: 'Responsable Administración',
//     foto: 'luis.jpg'
//   },
//   {
//     id: 5,
//     nombre: 'Maria',
//     cargo: 'Jefa',
//     descripcion: 'Responsable Administración',
//     foto: 'maria.jpg'
//   },
//   {
//     id: 6,
//     nombre: 'Pedro',
//     cargo: 'Jefa',
//     descripcion: 'Responsable Administración',
//     foto: 'pedro.jpg'
//   },
//   {
//     id: 7,
//     nombre: 'Pepe',
//     cargo: 'Jefa',
//     descripcion: 'Responsable Administración',
//     foto: 'pepe.jpg'
//   },
//   {
//     id: 8,
//     nombre: 'Rosa',
//     cargo: 'Jefa',
//     descripcion: 'Responsable Administración',
//     foto: 'rosa.jpg'
//   }
// ];
