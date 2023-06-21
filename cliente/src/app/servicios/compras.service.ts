import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra, CompraExtendido } from '../modelos/compras';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getCompras() {
    return this.http.get<CompraExtendido[]>(`${this.API_URI}/compras`);
  }
  getCompra(id: number) {
    return this.http.get(`${this.API_URI}/compras/${id}`);
  }

  getCompraComprobante(comp: number) {
    return this.http.get(`${this.API_URI}/compras/comprobante/${comp}`);
  }

  deleteCompra(id: number) {
    return this.http.delete(`${this.API_URI}/compras/${id}`);
  }
  // veridicar aca para producto
  saveCompra(compra: Compra) {
    return this.http.post(`${this.API_URI}/compras`, compra);
  }

  updateCompra(id: number, updatedCompra: Compra): Observable<Compra> {
    return this.http.put(`${this.API_URI}/compras/${id}`, updatedCompra);
  }
}
