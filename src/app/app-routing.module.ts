import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';






const routes: Routes = [

    {path:'', component: InicioComponent},
    {path:'nuevo', component: NuevoComponent},
    {path:'trabajadores', component: TrabajadoresComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
