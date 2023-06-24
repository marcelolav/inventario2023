import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VentaCabecera, VentasDetalle } from '../modelos/ventas';
@Injectable({
  providedIn: 'root',
})
export class VentasService {
  API_URI = 'http://localhost:3000/api/ventas';
  constructor(private http: HttpClient) {}

  // TODO: Ventas cabecera
  getVentasCabecera() {
    return this.http.get(`${this.API_URI}/cab`);
  }
  getVentaCabecera(id: string) {
    return this.http.get(`${this.API_URI}/cab/${id}`);
  }
  deleteVentaCabecera(id: number) {
    return this.http.delete(`${this.API_URI}/cab/${id}`);
  }
  saveVentaCabecera(venta: VentaCabecera) {
    const bod = {
      comprobante: venta.comprobante,
      idclientes: venta.idclientes,
      fecha: venta.fecha,
      totalventa: venta.totalventa,
    };
    return this.http.post(`${this.API_URI}/cab`, bod);
  }
  updateVentaCabecera(
    id: string | number,
    updatedVenta: VentaCabecera
  ): Observable<VentaCabecera> {
    return this.http.put(`${this.API_URI}/cab/${id}`, updatedVenta);
  }

  // TODO: Ventas Detalle
  getVentasDetalle() {
    return this.http.get(`${this.API_URI}/det`);
  }
  getVentaDetallexComprobante(comp: number) {
    return this.http.get(`${this.API_URI}/detcomp/${comp}`);
  }
  deleteVentasDetalle(comp: number) {
    return this.http.delete(`${this.API_URI}/det/${comp}`);
  }
  saveVentaDetalle(venta: VentasDetalle) {
    const bod = {
      comprobante: venta.comprobante,
      idproductos: venta.idproductos,
      cantidad: venta.cantidad,
      importe: venta.importe,
      subtotal: venta.subtotal,
    };
    return this.http.post(`${this.API_URI}/det`, bod);
  }
  getTotal(comp: number) {
    return this.http.get(`${this.API_URI}/func/${comp}`); // este endpoint es solo el total ningun campo mas.!!!
  }
}
