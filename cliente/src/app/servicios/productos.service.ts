import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../modelos/productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.API_URI}/productos`);
  }
  getProducto(id: string) {
    return this.http.get(`${this.API_URI}/productos/${id}`);
  }

  deleteProducto(id: string) {
    return this.http.delete(`${this.API_URI}/productos/${id}`);
  }
  // veridicar aca para producto
  saveProducto(producto: Producto) {
    const bod = {
      nombre: producto,
    };
    console.log(bod);
    return this.http.post(`${this.API_URI}/productos`, bod);
  }

  updateProducto(id: string | number, updatedProducto: Producto): Observable<Producto> {
    return this.http.put(`${this.API_URI}/productos/${id}`, updatedProducto);
  }

}
