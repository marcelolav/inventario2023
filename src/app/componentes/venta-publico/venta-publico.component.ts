import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/modelos/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-venta-publico',
  templateUrl: './venta-publico.component.html',
  styleUrls: ['./venta-publico.component.css']
})
export class VentaPublicoComponent implements OnInit  {
  
  
  productosService = inject(ProductosService);
  productosDatos = new MatTableDataSource();
  public columnas = ['codigobarra','nombre', 'precio' ];  
  
   
  ngOnInit(): void {
    this.obtenerProductos();
  }
  async obtenerProductos() {
    this.productosDatos.data = await this.productosService.obtenerProductos();
    console.log(this.productosDatos);

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.productosDatos.filter = filterValue.trim().toLowerCase();
    console.log(this.productosDatos.data);
  }
 
}
