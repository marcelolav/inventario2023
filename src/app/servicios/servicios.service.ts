import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpService) { }

  public async obtenerServicios() {
    return await this.http.get('/servicios');
  }
}
