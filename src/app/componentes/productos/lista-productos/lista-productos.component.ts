import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ProductosService} from '../../../servicios/productos.service'
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  public columnas = ['codigobarra', 'nombre', 'descripcion', 'precio', 'preciocompra', 'existencia', 'nombrerubro', 'eliminar', 'modificar'];
  public dataSource = new MatTableDataSource();
  constructor(private productosService: ProductosService) { }

  async ngOnInit() {
    await this.obtenerProductos();
  }
  async obtenerProductos() {
    this.dataSource.data = await this.productosService.obtenerProductos();
  }
  eliminar(id: number) {
    if (confirm('Seguro de eliminar el producto')) {
      this.productosService.eliminarProducto(id)
    }
    this.obtenerProductos();
  }

  modificar(id: number) {
    console.log(id);
    const dato = this.productosService.obtenerProducto(id);
    console.log(dato);

  }
}
