import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { Rubros } from 'src/app/modelos/rubros';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-abm-productos',
  templateUrl: './abm-productos.component.html',
  styleUrls: ['./abm-productos.component.css']
})
export class AbmProductosComponent implements OnInit{
  productoModel = new Producto("", "","", 0,0,0,0,0,0);
  rubros: Rubros[] = [];
  constructor(private productosService: ProductosService) {}
  ngOnInit() {
    this.recuperaRubros();
  }
  
  async guardarProducto() {
    await this.productosService.agregarProducto(this.productoModel);
  }

  async recuperaRubros() {
    this.rubros = await this.productosService.obtenerRubros();
  }
}
