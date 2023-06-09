import { Component, OnInit, inject } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
  carritoService = inject(CarritoService);
  importeTotal = [];

  importeNumerico: any
  ngOnInit() {
    this.totalCarrito();
  }
  async totalCarrito() {
    this.importeTotal = await this.carritoService.obtenerTotal();
    this.importeNumerico = Number(Object.keys(this.importeTotal[0]));
  }
}
