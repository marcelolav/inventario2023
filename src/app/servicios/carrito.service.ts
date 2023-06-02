import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  importeTotal = 0

  constructor(private http: HttpService) { }

  public async agregarAlCarrito(idProducto: number) {
    return await this.http.post("/carrito/agregar", {
      id: idProducto,
    });
  };

  async obtenerProductos() {
    return await this.http.get("/carrito");
  };

  async limpiarCarrito() {
    return await this.http.get("/carrito/limpiar")
  };


}
