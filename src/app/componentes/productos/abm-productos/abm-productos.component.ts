import { Component } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-abm-productos',
  templateUrl: './abm-productos.component.html',
  styleUrls: ['./abm-productos.component.css']
})
export class AbmProductosComponent {
  productoModel = new Producto("", "","", 0,0,0,0,0);
  
  constructor(private productosService: ProductosService) {}
  
  async guardarProducto() {
    await this.productosService.agregarProducto(this.productoModel);
  }
}
