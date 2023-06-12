import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { ListadoProductosComponent } from './componentes/productos/listado/listado.component';
import { FormularioProductosComponent } from './componentes/productos/formulario/formulario.component';
import { FormularioRubrosComponent } from './componentes/rubros/formulario/formulario.component';
import { AbmRubrosComponent } from './componentes/rubros/abm-rubros.component';
import { AbmProductosComponent } from './componentes/productos/abm-productos.component';

const routes: Routes = [
  { path: 'productos', component: AbmProductosComponent },
  { path: 'productos/listado', component: ListadoProductosComponent },
  { path: 'productos/formulario', component: FormularioProductosComponent },
  { path: 'rubros', component: AbmRubrosComponent },
  { path: 'rubros/agregar', component: FormularioRubrosComponent },
  { path: 'rubros/editar/:id', component: FormularioRubrosComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
