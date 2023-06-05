import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { AbmProductosComponent } from './componentes/productos/abm-productos/abm-productos.component';
import { VentasComponent } from './componentes/ventas/ventas.component';

const routes: Routes = [

  {path: 'productos', component: ProductosComponent },
  {path: 'carrito', component: CarritoComponent },
  {path: 'abm-productos', component: AbmProductosComponent},
  {path: 'ventas', component: VentasComponent},
  {path: '', redirectTo: "/", pathMatch: "full"},
  {path: '**', redirectTo: "/"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
