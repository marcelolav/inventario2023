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

  public columnas = ['codigobarra','nombre', 'descripcion', 'precio', 'preciocompra', 'existencia', 'agregar'];
  public colItems = ['producto', 'cantidad', 'precio'];
  public dataSource = new MatTableDataSource();
  public itemsCarrito = new MatTableDataSource();
  public carro = new Carrito("",0,0);

  public total = 0;
  

  constructor(private productosService: ProductosService, private carrito: CarritoService) { }

  async ngOnInit() {
    await this.obtenerProductos();
    // this.total = await this.carrito.obtenerTotal();
  }

  async obtenerProductos() {
    this.dataSource.data = await this.productosService.obtenerProductos();
    // this.total = await this.carrito.obtenerTotal();
  }

  async agregarCarro(producto:string, cantidad: number, precio: number) {
    const constreg:Carrito = {
      producto, 
      cantidad,
      precio
    }
    this.carrito.agregarAlCarrito(constreg);
    this.verCarrito();

    console.log(producto, cantidad, precio)
  }

  // async agregaProducto(idProducto: number) {
  //   const id = idProducto;
  //   const respuesta = await this.carrito.agregarAlCarrito(this.carro);
  //   this.total = await this.carrito.obtenerTotal();
  //   this.carritoJson = await this.carrito.obtenerProductos();
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async verCarrito() {
    this.itemsCarrito = await this.carrito.obtenerItemsCarrito();

    console.log(this.itemsCarrito);
    // this.total = await this.carrito.obtenerTotal();
  }

  async limpiarCarrito() {
    this.carrito.limpiarCarrito();
    // this.dataSource.data = await this.carrito.obtenerItemsCarrito()
    // this.carritoJson = []
    // this.total = await this.carrito.obtenerTotal();
  }

  finalizaVenta(datos: any) {

    const regVenta = datos.nombre
    console.log(regVenta);
  }
}
