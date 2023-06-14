import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../modelos/servicios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getServicios() {
    return this.http.get(`${this.API_URI}/servicios`);
  }

  getServicio(id: string) {
    return this.http.get(`${this.API_URI}/servicios/${id}`);
  }

  deleteServicio(id: string) {
    return this.http.delete(`${this.API_URI}/servicios/${id}`);
  }
  saveServicio(servicio: Servicio) {
    const bod = {
      cliente: servicio.cliente,
      telefono: servicio.telefono,
      fechaingreso: servicio.fechaingreso,
      articulo: servicio.articulo,
      falla: servicio.falla,
      observaciones: servicio.observaciones,
      fechasalida: servicio.fechasalida,
      precioreparacion: servicio.precioreparacion,
      reparado: servicio.reparado,
    };
    return this.http.post(`${this.API_URI}/servicios`, bod);
  }

  updateServicio(
    id: string | number,
    updatedServicio: Servicio
  ): Observable<Servicio> {
    return this.http.put(`${this.API_URI}/servicios/${id}`, updatedServicio);
  }
}
