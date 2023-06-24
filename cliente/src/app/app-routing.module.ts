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
import { EntregaComponent } from './componentes/servicios/entrega/entrega.component';
import { FormularioVentasComponent } from './componentes/ventas/formulario/formulario.component';
import { ListadoVentasComponent } from './componentes/ventas/listado/listado.component';
import { ListadoClientesComponent } from './componentes/clientes/listado/listado.component';
import { FormularioClientesComponent } from './componentes/clientes/formulario/formulario.component';
import { AbmClientesComponent } from './componentes/clientes/abm-clientes.component';
import { AbmComprasComponent } from './componentes/compras/abm-compras.component';
import { ListadoComprasComponent } from './componentes/compras/listado/listado.component';
import { FormularioComprasComponent } from './componentes/compras/formulario/formulario.component';

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
  { path: 'servicios', component: AbmServiciosComponent },
  { path: 'servicios/agregar', component: FormularioServiciosComponent },
  { path: 'servicios/editar/:id', component: FormularioServiciosComponent },
  { path: 'servicios/entregar/:id', component: EntregaComponent },
  { path: 'servicios/listado', component: ListadoServiciosComponent },
  { path: 'servicios/pendientes', component: PendientesComponent },
  { path: 'ventas/listado', component: ListadoVentasComponent },
  { path: 'ventas/agregar', component: FormularioVentasComponent },
  { path: 'ventas/editar/:id', component: FormularioVentasComponent },
  { path: 'compras', component: AbmComprasComponent },
  { path: 'compras/listado', component: ListadoComprasComponent },
  { path: 'compras/agregar', component: FormularioComprasComponent },
  { path: 'compras/editar/:id', component: FormularioComprasComponent },
  { path: 'clientes', component: AbmClientesComponent },
  { path: 'clientes/listado', component: ListadoClientesComponent },
  { path: 'clientes/agregar', component: FormularioClientesComponent },
  { path: 'clientes/editar/:id', component: FormularioClientesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
