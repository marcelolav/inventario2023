import { Injectable } from '@angular/core';
import {Producto} from "../modelos/producto";
import {HttpService} from "../servicios/http.service";
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpService) { }

  public async obtenerProductos() {
    return await this.http.get("/productos");
  }
  public async obtenerProducto(id: number) {
      return await this.http.get("/producto?id=" + id);
    }
  public async obtenerRubros() {
      return await this.http.get(`/rubros`);
  }
  public async agregarProducto(producto: Producto) {
      return await this.http.post("/producto", producto);
  }
  public async eliminarProducto(id: number) {
      return await this.http.delete("/producto?id=".concat(id.toString()));
  }

}
