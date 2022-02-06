import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTrabajadorComponent } from './views/card-trabajador/card-trabajador.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ClientesComponent } from './views/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTrabajadorComponent,
    ClienteComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
