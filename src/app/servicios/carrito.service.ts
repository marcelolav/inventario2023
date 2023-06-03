import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import { Ventas } from '../modelos/ventas';
import { Carrito } from '../modelos/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  importeTotal = 0

  constructor(private http: HttpService) { }

  public async agregarAlCarrito(regCarro: Carrito) {
    return await this.http.post("/carrito/agregar", regCarro);
  };

  async obtenerItemsCarrito() {
    return await this.http.get("/carrito");
  };

  async limpiarCarrito() {
    return await this.http.get("/carrito/limpiar");
  };

  async obtenerTotal() {
    return await this.http.get("/carrito/total");
  }

  async agregarRegistroVenta(regVenta: Ventas) {
    return await this.http.post("/ventas/agregar", {
      id: regVenta,
    });
  }
}
