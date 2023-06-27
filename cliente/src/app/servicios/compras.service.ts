import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompraCabecera, CompraDetalle } from '../modelos/compras';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getComprasCabecera() {
    return this.http.get<CompraCabecera[]>(`${this.API_URI}/compras/cabecera`);
  }
  getCompraCabecera(id: number) {
    return this.http.get<CompraCabecera[]>(
      `${this.API_URI}/compras/cabecera/${id}`
    );
  }
  getComprasDetalle() {
    return this.http.get(`${this.API_URI}/compras/detalle`);
  }
  getCompraDetalle(id: number) {
    return this.http.get(`${this.API_URI}/compras/detalle/${id}`);
  }
  saveCompraCabecera(compra: CompraCabecera) {
    return this.http.post(`${this.API_URI}/compras/cabecera`, compra);
  }

  saveCompraDetalle(compra: CompraDetalle) {
    return this.http.post(`${this.API_URI}/compras/detalle`, compra);
  }
}
