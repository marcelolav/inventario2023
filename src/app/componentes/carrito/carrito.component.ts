import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Carrito } from '../../modelos/carrito';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { Ventas } from 'src/app/modelos/ventas';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public fechaActual = new Date();
  public dataSource = new MatTableDataSource();
  public colItems = ['producto', 'cantidad', 'precio'];
  public regVenta = new Ventas(this.fechaActual, '',0,0);
  public totalCarrito = 0;

  constructor(private carrito: CarritoService)  {}
  
  ngOnInit() {
    this.verCarrito();
  }
  
  async verCarrito() {
    this.dataSource = await this.carrito.obtenerItemsCarrito();
  }
  async eliminarCarrito() {
    this.carrito.limpiarCarrito();
    this.verCarrito();
  }

  facturarCarrito() {
    const object1 = JSON.stringify(this.dataSource);
    const object2 = JSON.parse(object1);
    
    for (const [key, value] of Object.entries(object2)) {
      let registrocarro = JSON.stringify(value);
      let objetocarro = JSON.parse(registrocarro)
      let fechaActual = new Date();
      let producto = objetocarro.producto;
      let cantidad = objetocarro.cantidad;
      let precio = Number(objetocarro.precio);
      // this.totalCarrito = this.totalCarrito + precio;
      let regVenta: Ventas =  {
        fecha: fechaActual,
        producto: producto,
        cantidad: cantidad,
        precio: precio
      }
      this.carrito.agregarRegistroVenta(regVenta);
      this.carrito.limpiarCarrito();
      this.totalCarrito = 0;
      this.verCarrito();
    }
 
  }
  
  calcularTotal() {
    this.totalCarrito = 0;
    for (const [key, value] of Object.entries(JSON.parse(JSON.stringify(this.dataSource)))) {
      let objetocarro = JSON.parse(JSON.stringify(value));
      let precio = Number(objetocarro.precio);
      this.totalCarrito = this.totalCarrito + precio;
    }
    return this.totalCarrito;
  }
}
