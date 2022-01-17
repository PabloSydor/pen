import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardTrabajadorComponent } from './card-trabajador/card-trabajador.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTrabajadorComponent,
    NuevoComponent,
    TrabajadoresComponent,
    InicioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
