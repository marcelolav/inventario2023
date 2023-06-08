import { Component, inject } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-venta-publico',
  templateUrl: './venta-publico.component.html',
  styleUrls: ['./venta-publico.component.css']
})
export class VentaPublicoComponent {

  productosService = inject(ProductosService);

  productosArray = 
}
