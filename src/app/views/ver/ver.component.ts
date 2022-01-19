import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/Models/Cliente';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {

  idRuta = this.rutaActiva.snapshot.params.id;
  cliente = this.$clientes.getCliente(this.idRuta);

  constructor(private rutaActiva: ActivatedRoute,
              private $clientes: ClientesService) { }

  ngOnInit() {
  }



}
