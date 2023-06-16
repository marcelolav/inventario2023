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
import { FormularioRubrosComponent } from './componentes/rubros/formulario/formulario.component';
import { ListadoRubrosComponent } from './componentes/rubros/listado/listado.component';
import { AbmRubrosComponent } from './componentes/rubros/abm-rubros.component';
import { FormularioProveedoresComponent } from './componentes/proveedores/formulario/formulario.component';
import { ListadoProveedoresComponent } from './componentes/proveedores/listado/listado.component';
import { AbmProveedoresComponent } from './componentes/proveedores/abm-proveedores.component';
import { FormularioComprasComponent } from './componentes/compras/formulario/formulario.component';
import { ListadoComprasComponent } from './componentes/compras/listado/listado.component';
import { AbmComprasComponent } from './componentes/compras/abm-compras.component';
import { ListadoServiciosComponent } from './componentes/servicios/listado/listado.component';
import { FormularioServiciosComponent } from './componentes/servicios/formulario/formulario.component';
import { AbmServiciosComponent } from './componentes/servicios/abm-servicios.component';
import { ListadoVentasComponent } from './componentes/ventas/listado/listado.component';
import { FormularioVentasComponent } from './componentes/ventas/formulario/formulario.component';
import { AbmVentasComponent } from './componentes/ventas/abm-ventas.component';

// Services
import { ProductosService } from './servicios/productos.service';
import { RubrosService } from './servicios/rubros.service';
import { ProveedoresService } from './servicios/proveedores.service';
import { ServiciosService } from './servicios/servicios.service';
import { ComprasService } from './servicios/compras.service';
import { VentasService } from './servicios/ventas.service';
import { CarritoService } from './servicios/carrito.service';

// Directives
import { PendientesComponent } from './componentes/servicios/pendientes/pendientes.component';
import { EntregaComponent } from './componentes/servicios/entrega/entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    MenunavegacionComponent, // Menu de navegacion
    FormularioProductosComponent, // Productos - Form
    ListadoProductosComponent, // Productos - Listado
    AbmProductosComponent, // Productos - Principal
    FormularioRubrosComponent, // Rubros - Form
    ListadoRubrosComponent, // Rubros - Listado
    AbmRubrosComponent, // Rubros - Principal
    FormularioProveedoresComponent, // Proveedores - Form
    ListadoProveedoresComponent, // Proveedores - Listado
    AbmProveedoresComponent, // Proveedores - Principal
    FormularioComprasComponent, // Compras - Form
    ListadoComprasComponent, // Compras - Listado
    AbmComprasComponent, // Compras - Principal
    FormularioServiciosComponent, // Servicios - Form
    ListadoServiciosComponent, // Servicios - Listado
    AbmServiciosComponent, // Servicios - Principal
    FormularioVentasComponent, // Ventas - Form
    ListadoVentasComponent, // Ventas - Listado
    AbmVentasComponent, // Ventas - Principal
    PendientesComponent,
    EntregaComponent, // Directiva para productos
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    ProductosService,
    RubrosService,
    ProveedoresService,
    ComprasService,
    ServiciosService,
    VentasService,
    CarritoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
