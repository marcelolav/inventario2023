import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes del sistema
import { MenunavegacionComponent } from './componentes/menunavegacion/menunavegacion.component';
import { FormularioProductosComponent } from './componentes/productos/formulario/formulario.component';
import { ListadoProductosComponent } from './componentes/productos/listado/listado.component';
import { AbmProductosComponent } from './componentes/productos/abm-productos.component';
import { ListadoRubrosComponent } from './componentes/rubros/listado/listado.component';
import { FormularioRubrosComponent } from './componentes/rubros/formulario/formulario.component';
import { AbmRubrosComponent } from './componentes/rubros/abm-rubros.component';

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
    AbmRubrosComponent,
    AbmProductosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProductosService, RubrosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
