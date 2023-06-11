import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes del sistema
import { FormularioProductosComponent } from './componentes/productos/formulario/formulario.component';
import { ListadoProductosComponent } from './componentes/productos/listado/listado.component';
import { MenunavegacionComponent } from './componentes/menunavegacion/menunavegacion.component';
import { ListadoRubrosComponent } from './componentes/rubros/listado/listado.component';
import { FormularioRubrosComponent } from './componentes/rubros/formulario/formulario.component';

// Services
import { ProductosService } from './servicios/productos.service';
import { RubrosService } from './servicios/rubros.service';
@NgModule({
  declarations: [
    AppComponent,
    FormularioProductosComponent,
    ListadoProductosComponent,
    MenunavegacionComponent,
    ListadoRubrosComponent,
    FormularioRubrosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductosService, RubrosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
