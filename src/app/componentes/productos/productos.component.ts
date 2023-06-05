import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ProductosService} from '../../servicios/productos.service'
import { CarritoService } from 'src/app/servicios/carrito.service';
import { Ventas } from '../../modelos/ventas';
import { Carrito } from '../../modelos/carrito';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  public columnas = ['codigobarra','nombre', 'descripcion', 'precio', 'preciocompra', 'existencia', 'nombrerubro', 'agregar'];
  public dataSource = new MatTableDataSource();
  public carro = new Carrito("",0,0);
  public total = 0;

  constructor(private productosService: ProductosService, private carrito: CarritoService) { }

  async ngOnInit() {
    await this.obtenerProductos();
  }

  async obtenerProductos() {
    this.dataSource.data = await this.productosService.obtenerProductos();
  }

  async agregarCarro(producto:string, cantidad: number, precio: number) {
    const constreg:Carrito = {
      producto, 
      cantidad,
      precio
    }
    this.carrito.agregarAlCarrito(constreg);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 

  async limpiarCarrito() {
    this.carrito.limpiarCarrito();
  }

  finalizaVenta(datos: any) {

    const regVenta = datos.nombre
    console.log(regVenta);
  }
}
