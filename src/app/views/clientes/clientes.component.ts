import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/Models/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];


  constructor(private $clientes: ClientesService,
              private router: Router) { }

  ngOnInit() {
    this.registrarClientes();
  }



  public registrarClientes() {
    this.clientes = this.$clientes.getClientes();
    console.log(this.clientes);
  }

  public borrarCliente(id: any) {

    if (confirm("Seguro que desa borrar el usuario con id: " + id + "?") == true) {
      this.$clientes.borrarCliente(id);
      this.router.navigateByUrl('/clientes');
    }
  }






}
