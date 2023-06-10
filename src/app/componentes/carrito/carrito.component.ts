import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
  carritoService = inject(CarritoService);
  importeTotal = [];
  datosCarrito = new MatTableDataSource();
  columnas = ['producto', 'cantidad', 'precio', 'modificaCantidad', 'eliminar' ];

  importeNumerico: number = 0;
 
  async ngOnInit() {
    this.totalCarrito();
    this.datosCarrito.data = await this.carritoService.obtenerItemsCarrito();
   

  }
  async totalCarrito() {
    this.importeTotal = await this.carritoService.obtenerTotal();
    this.importeNumerico = Number(Object.values(this.importeTotal[0]));
  }

  async eliminarItemCarrito(id: number) { 
    if (confirm('Desea Eliminar el item')) {
      this.carritoService.eliminarItemCarrito(id);
      this.totalCarrito();
      // this.datosCarrito.data = await this.carritoService.obtenerItemsCarrito();
    }
  }
  modificaCantidadProducto(regCarrito: any) { 
    // 1- Preguntar cantidad 
    // 2- reemplazar la cantidad y el precio multiplicando x cantidad 
    // 3- Actualizar el registro en carrito con cantidad y precio
    // 1-
    const precioUnitario = regCarrito.precio;
    const cantidadNueva = Number(prompt('Cantidad:'));
    const precioNuevo = precioUnitario * cantidadNueva;
    this.carritoService.cambiarCantidad(regCarrito.id,  cantidadNueva, precioNuevo);
   
  }

  facturarCarrito() {
    console.log('aca facturar todo el carro completo');
  }
  async eliminarCarrito() {
    await this.carritoService.limpiarCarrito();
  }

}
