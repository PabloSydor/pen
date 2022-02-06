import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ClientesComponent } from './views/clientes/clientes.component';

const routes: Routes = [
  {path: "cliente/:nombre", component: ClienteComponent},
  {path: "", component: ClientesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
