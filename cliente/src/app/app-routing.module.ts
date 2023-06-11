import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { ListadoProductosComponent } from './componentes/productos/listado/listado.component';
import { FormularioProductosComponent } from './componentes/productos/formulario/formulario.component';
import { ListadoRubrosComponent } from './componentes/rubros/listado/listado.component';
import { FormularioRubrosComponent } from './componentes/rubros/formulario/formulario.component';

const routes: Routes = [
  { path: 'productos/listado', component: ListadoProductosComponent },
  { path: 'productos/formulario', component: FormularioProductosComponent },
  { path: 'rubros/listado', component: ListadoRubrosComponent },
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
