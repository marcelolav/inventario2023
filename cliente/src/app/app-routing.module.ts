import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { ListadoProductosComponent } from './componentes/productos/listado/listado.component';
import { FormularioProductosComponent } from './componentes/productos/formulario/formulario.component';
import { FormularioRubrosComponent } from './componentes/rubros/formulario/formulario.component';
import { AbmRubrosComponent } from './componentes/rubros/abm-rubros.component';
import { AbmProductosComponent } from './componentes/productos/abm-productos.component';
import { AbmProveedoresComponent } from './componentes/proveedores/abm-proveedores.component';
import { FormularioProveedoresComponent } from './componentes/proveedores/formulario/formulario.component';
import { AbmServiciosComponent } from './componentes/servicios/abm-servicios.component';
import { ListadoServiciosComponent } from './componentes/servicios/listado/listado.component';
import { FormularioServiciosComponent } from './componentes/servicios/formulario/formulario.component';
import { PendientesComponent } from './componentes/servicios/pendientes/pendientes.component';

const routes: Routes = [
  { path: 'productos', component: AbmProductosComponent },
  { path: 'productos/listado', component: ListadoProductosComponent },
  { path: 'productos/agregar', component: FormularioProductosComponent },
  { path: 'productos/editar/:id', component: FormularioProductosComponent },
  { path: 'rubros', component: AbmRubrosComponent },
  { path: 'rubros/agregar', component: FormularioRubrosComponent },
  { path: 'rubros/editar/:id', component: FormularioRubrosComponent },
  { path: 'proveedores', component: AbmProveedoresComponent },
  { path: 'proveedores/agregar', component: FormularioProveedoresComponent },
  { path: 'proveedores/editar/:id', component: FormularioProveedoresComponent },

  { path: 'servicios/alta', component: FormularioServiciosComponent },
  { path: 'servicios/listado', component: ListadoServiciosComponent },
  { path: 'servicios/editar', component: AbmServiciosComponent },
  { path: 'servicios/pendientes', component: PendientesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
