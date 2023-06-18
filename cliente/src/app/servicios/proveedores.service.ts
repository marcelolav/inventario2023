import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor, ProveedorListado } from '../modelos/proveedores';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getProveedores() {
    return this.http.get<ProveedorListado[]>(`${this.API_URI}/proveedores`);
  }

  getProveedor(id: number) {
    return this.http.get(`${this.API_URI}/proveedores/${id}`);
  }
  saveProveedor(proveedor: Proveedor) {
    return this.http.post(`${this.API_URI}/proveedores`, proveedor);
  }
  updateProveedor(id: number, proveedor: Proveedor) {
    return this.http.put(`${this.API_URI}/proveedores/${id}`, proveedor);
  }
  deleteProveedor(id: number) {
    return this.http.delete(`${this.API_URI}/proveedores/${id}`);
  }
}
