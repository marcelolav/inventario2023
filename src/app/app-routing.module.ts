import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

const routes: Routes = [

  {path: 'productos', component: ProductosComponent },
  {path: 'carrito', component: CarritoComponent },
  {path: '', redirectTo: "/", pathMatch: "full"},
  {path: '**', redirectTo: "/"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
