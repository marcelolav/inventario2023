import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import { Ventas } from '../modelos/ventas';
import { Carrito } from '../modelos/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  importeTotal = 0
  private serviceUrl = 'https://localhost:3000/carrito';

  constructor(private http: HttpService) { }

  public async agregarAlCarrito(regCarro: Carrito) {
    return await this.http.post("/carrito/agregar", regCarro);
  };

  async obtenerItemsCarrito() {
    return await this.http.get("/carrito");
  };

  async limpiarCarrito() {
    return await this.http.get("/carrito/eliminar");
  };

  async obtenerTotal() {
    return await this.http.get("/carrito/total");
  };
  async agregarRegistroVenta(regVenta: Ventas) {
    return await this.http.post("/ventas/agregar", regVenta);
  };
  async cambiarCantidad(id: number, cantidad:number, prec:number) {
    return await this.http.update("/carrito/cantidad?id=" .concat(id.toString()) + "&cantidad=" .concat(cantidad.toString()) + "&precio=" .concat(prec.toString()));
  };

  public async eliminarItemCarrito(id: number) {
    return await this.http.delete('/carrito/eliminaitem?id='.concat(id.toString()));
  }


  // pruebas test

  
}
