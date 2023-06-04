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
    //console.log(object1);
    const object2 = JSON.parse(object1);
    //console.log(object2);
    
    for (const [key, value] of Object.entries(object2)) {
      // Registro de Venta:  fecha, producto, cantidad, precio
      let registrocarro = JSON.stringify(value);
      let objetocarro = JSON.parse(registrocarro)
      console.log(objetocarro.producto, objetocarro.cantidad, objetocarro.precio);
      let fecha = new Date();
      let producto = objetocarro.producto;
      let cantidad = objetocarro.cantidad;
      let precio = Number(objetocarro.precio);
      let regVenta: Ventas =  {
        fecha: fecha,
        producto: producto,
        cantidad: cantidad,
        precio: precio
      }
      console.log(regVenta);
      this.carrito.agregarRegistroVenta(regVenta);
    }
    //this.carrito.limpiarCarrito();
 
  }
  

}
