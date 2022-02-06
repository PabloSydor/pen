import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute) { }


  private nombre: string = this.aRoute.snapshot.params.nombre;

  ngOnInit() {
  }

}
