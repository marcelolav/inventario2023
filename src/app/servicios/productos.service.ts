import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto';
import { HttpService } from '../servicios/http.service';
import { Rubros } from '../modelos/rubros';
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpService) {}

  public async obtenerProductos() {
    return await this.http.get('/productos');
  }
  public async obtenerProducto(id: number) {
    return await this.http.get('/producto?id=' + id);
  }
  public async agregarProducto(producto: Producto) {
    return await this.http.post('/producto', producto);
  }
  public async eliminarProducto(id: number) {
    return await this.http.delete('/producto?id='.concat(id.toString()));
  }
  public async obtenerRubros() {
    return await this.http.get(`/rubros`);
  }
  public async obtenerRubro(id: number) {
    return await this.http.get('/rubro?id=' + id);
  }
  public async agregarRubro(rubro: Rubros) {
    return await this.http.post('/rubro', rubro);
  }
  public async eliminarRubro(id: number) {
    return await this.http.delete(`/rubro?id=${id}`);
  }
  public async modificarRubro(rubroid: number, nombrerubro: string) {
    console.log('Service: ', rubroid, nombrerubro)
    return await this.http.update(`/rubro?rubroid=${rubroid}&nombrerubro=${nombrerubro}`);
  }
}
