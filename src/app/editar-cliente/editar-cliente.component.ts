import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../Models/Cliente';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {


  idRuta = this.rutaActiva.snapshot.params.id;
  cliente = this.$clientes.getCliente(this.idRuta);


  constructor(private rutaActiva: ActivatedRoute,
              private $clientes: ClientesService,
              private router: Router,
              ) { }

  ngOnInit() {
  }


  actualizar() {
    let cliente: Cliente = {
      id: this.idRuta,
      nombre: (<HTMLInputElement>document.getElementById("nombre")).value,
      cargo: (<HTMLInputElement>document.getElementById("cargo")).value,
      descripcion: (<HTMLInputElement>document.getElementById("descripcion")).value,
      foto:  (<HTMLInputElement>document.getElementById("foto")).value
    };

    this.$clientes.editarCliente(this.idRuta, cliente);
    this.router.navigateByUrl('clientes/' + this.idRuta);


  }





}
