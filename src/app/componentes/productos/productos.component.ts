import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ProductosService} from '../../servicios/productos.service'
import { CarritoService } from 'src/app/servicios/carrito.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  public columnas = ['codigobarra','nombre', 'descripcion', 'precio', 'preciocompra', 'existencia', 'agregar'];
  public dataSource = new MatTableDataSource();

  constructor(private productosService: ProductosService, private carrito: CarritoService) { }

  async ngOnInit() {
    await this.obtenerProductos();
  }

  async obtenerProductos() {
    this.dataSource.data = await this.productosService.obtenerProductos();
  }
  async agregaProducto(idProducto: number) {
    const id = idProducto;
    const respuesta = await this.carrito.agregarAlCarrito(id);
    // this.dataSource.data = await this.carrito.obtenerProductos();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async verCompra() {
    this.dataSource.data = await this.carrito.obtenerProductos()
  }

  async limpiarCarrito() {
    this.carrito.limpiarCarrito();
    this.dataSource.data = await this.carrito.obtenerProductos()
  }
}
