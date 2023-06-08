import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { AbmProductosComponent } from './componentes/productos/abm-productos/abm-productos.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { RubrosComponent } from './componentes/rubros/rubros.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { VentaPublicoComponent } from './componentes/venta-publico/venta-publico.component';

const routes: Routes = [

  {path: 'productos', component: ProductosComponent },
  {path: 'carrito', component: CarritoComponent },
  {path: 'abm-productos', component: AbmProductosComponent},
  { path: 'ventas', component: VentasComponent },
  { path: 'rubros', component: RubrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'ventapublico', component: VentaPublicoComponent },
  {path: '', redirectTo: "/", pathMatch: "full"},
  {path: '**', redirectTo: "/"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
