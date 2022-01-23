import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './views/error/error.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { MenuComponent } from './views/menu/menu.component';
import { VerComponent } from './views/ver/ver.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ClientesComponent,
    InicioComponent,
    MenuComponent,
    VerComponent,
    EditarClienteComponent,
    NewClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
