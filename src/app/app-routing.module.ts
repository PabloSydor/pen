import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './views/clientes/clientes.component';
import { ErrorComponent } from './views/error/error.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { VerComponent } from './views/ver/ver.component';


const routes: Routes = [

  {path: "", component: InicioComponent},
  {path: "clientes", component: ClientesComponent},
  { path: "clientes/:id", component: VerComponent },




  // {path: "**", redirectTo: 'error', pathMatch: 'full'}
  {path: "**", component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
