import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../modelos/ventas';
@Injectable({
  providedIn: 'root',
})
export class VentasService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getVentas() {
    return this.http.get(`${this.API_URI}/ventas`);
  }
  getVenta(id: string) {
    return this.http.get(`${this.API_URI}/ventas/${id}`);
  }

  deleteVenta(id: string) {
    return this.http.delete(`${this.API_URI}/ventas/${id}`);
  }
  // veridicar aca para producto
  saveVenta(venta: Venta) {
    const bod = {
      fecha: venta.fecha,
      producto: venta.producto,
      cantidad: venta.cantidad,
      preciounitario: venta.preciounitario,
      preciosubtotal: venta.preciosubtotal,
    };
    return this.http.post(`${this.API_URI}/ventas`, bod);
  }

  updateVenta(id: string | number, updatedVenta: Venta): Observable<Venta> {
    return this.http.put(`${this.API_URI}/ventas/${id}`, updatedVenta);
  }
}
