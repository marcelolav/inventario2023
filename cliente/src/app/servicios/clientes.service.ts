import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente, ListadoCliente } from '../modelos/clientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getClientes() {
    return this.http.get<Cliente[]>(`${this.API_URI}/clientes`);
  }
  getClientesListado(): Observable<ListadoCliente[]> {
    return this.http.get<ListadoCliente[]>(`${this.API_URI}/clientes`);
  }
  getCliente(id: number) {
    return this.http.get(`${this.API_URI}/clientes/${id}`);
  }

  deleteCliente(id: number) {
    return this.http.delete(`${this.API_URI}/clientes/${id}`);
  }
  // veridicar aca para producto
  saveCliente(cliente: Cliente) {
    // const bod = {
    //   codigobarra: producto.codigobarra,
    //   nombreproducto: producto.nombreproducto,
    //   descripcion: producto.descripcion,
    //   precio: producto.precio,
    //   preciocompra: producto.preciocompra,
    //   existencia: producto.existencia,
    //   preciorefdolar: producto.preciorefdolar,
    //   rubroid: producto.rubroid,
    // };
    // console.log(bod);
    return this.http.post(`${this.API_URI}/clientes`, cliente);
  }

  updateCliente(id: number, updatedCliente: Cliente): Observable<Cliente> {
    return this.http.put(`${this.API_URI}/clientes/${id}`, updatedCliente);
  }
}
