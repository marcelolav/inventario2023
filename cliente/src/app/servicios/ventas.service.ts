import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VentaCabecera, VentasDetalle } from '../modelos/ventas';
@Injectable({
  providedIn: 'root',
})
export class VentasService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  // TODO: Ventas cabecera
  getVentasCabecera() {
    return this.http.get(`${this.API_URI}/ventas/cab`);
  }
  getVentaCabecera(id: string) {
    return this.http.get(`${this.API_URI}/ventas/cab/${id}`);
  }
  deleteVentaCabecera(id: string) {
    return this.http.delete(`${this.API_URI}/ventas/cab/${id}`);
  }
  saveVentaCabecera(venta: VentaCabecera) {
    const bod = {
      comprobante: venta.comprobante,
      idclientes: venta.idclientes,
      fecha: venta.fecha,
      totalventa: venta.totalventa,
    };
    return this.http.post(`${this.API_URI}/ventas/cab`, bod);
  }
  updateVentaCabecera(
    id: string | number,
    updatedVenta: VentaCabecera
  ): Observable<VentaCabecera> {
    return this.http.put(`${this.API_URI}/ventas/cab/${id}`, updatedVenta);
  }

  // TODO: Ventas Detalle
  getVentasDetalle() {
    return this.http.get(`${this.API_URI}/ventas/det`);
  }
  getVentaDetallexComprobante(comp: number) {
    return this.http.get(`${this.API_URI}/ventas/det/${id}`);
  }
  saveVentaDetalle(venta: VentasDetalle) {
    const bod = {
      comprobante: venta.comprobante,
      idproductos: venta.idproductos,
      cantidad: venta.cantidad,
      importe: venta.importe,
      subtotal: venta.subtotal,
    };
    return this.http.post(`${this.API_URI}/ventas/det`, bod);
  }
}
