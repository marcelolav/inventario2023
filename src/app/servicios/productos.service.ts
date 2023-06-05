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
  
  public async obtenerRubros() {
      return await this.http.get(`/rubros`);
    }
}
