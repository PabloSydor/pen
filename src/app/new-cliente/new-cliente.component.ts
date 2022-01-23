import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../Models/Cliente';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.scss']
})
export class NewClienteComponent implements OnInit {

  constructor(private router: Router,
              private $clientes: ClientesService ) { }

  ngOnInit() {
  }

  public newCliente() {
    let cliente: Cliente = {
      id: parseInt((<HTMLInputElement>document.getElementById('id')).value) ,
      nombre: (<HTMLInputElement>document.getElementById('nombre')).value ,
      cargo: (<HTMLInputElement>document.getElementById('cargo')).value ,
      descripcion: (<HTMLInputElement>document.getElementById('descripcion')).value ,
      foto: (<HTMLInputElement>document.getElementById('foto')).value
    }

    this.$clientes.newCliente(cliente);
    this.router.navigateByUrl('clientes');


  }





}
