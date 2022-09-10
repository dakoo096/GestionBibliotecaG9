import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PrincipalComponent } from './principal/principal.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'principal', component:PrincipalComponent },
  {path:'prestamos', component:PrestamosComponent},
  {path: 'devoluciones',component:DevolucionesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
