import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Modulos de angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatChipsModule} from "@angular/material/chips";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatStepperModule} from "@angular/material/stepper";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from '@angular/material/sidenav'; 

// Modulos del app
import { ProductosComponent } from './componentes/productos/productos.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { AbmProductosComponent } from './componentes/productos/abm-productos/abm-productos.component';
import { VentasComponent } from './componentes/ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CarritoComponent,
    AbmProductosComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatGridListModule,
    MatBadgeModule,
    MatMenuModule,
    MatStepperModule, 
    MatSidenavModule,
    MatCardModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
