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
  deleteVentaCabecera(id: number) {
    return this.http.delete(`${this.API_URI}/ventas/cab/${id}`);
  }
  saveVentaCabecera(venta: VentaCabecera) {
    const bod = {
      comprobante_cabecera: venta.comprobante_cabecera,
      idclientes_cabecera: venta.idclientes_cabecera,
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
    return this.http.get(`${this.API_URI}/ventas/detcomp/${comp}`);
  }
  deleteVentasDetalle(comp: number) {
    return this.http.delete(`${this.API_URI}/ventas/det/${comp}`);
  }
  saveVentaDetalle(venta: VentasDetalle) {
    const bod = {
      comprobante_detalle: venta.comprobante_detalle,
      idproductos_detalle: venta.idproductos_detalle,
      cantidad: venta.cantidad,
      importe: venta.importe,
      subtotal: venta.subtotal,
    };
    const id = bod.idproductos_detalle;
    const cantidadNueva = bod.cantidad;
    this.updateExistencia(id, cantidadNueva);

    return this.http.post(`${this.API_URI}/ventas/det`, bod);
  }
  getTotal(comp: number) {
    return this.http.get(`${this.API_URI}/ventas/func/${comp}`); // este endpoint es solo el total ningun campo mas.!!! El comprobante debe estar generado
  }

  updateExistencia(idproducto: number, cantidadNueva: number) {
    return this.http.get(
      `${this.API_URI}/productos/actualizaexistencia/${idproducto}/${cantidadNueva}/venta`
    );
    console.log(idproducto, cantidadNueva);
  }
}
