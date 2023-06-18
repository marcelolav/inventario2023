import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rubro, RubroListado } from '../modelos/rubros';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RubrosService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getRubros() {
    return this.http.get<RubroListado[]>(`${this.API_URI}/rubros`);
  }

  getRubro(id: number) {
    return this.http.get(`${this.API_URI}/rubros/${id}`);
  }

  deleteRubro(id: number) {
    return this.http.delete(`${this.API_URI}/rubros/${id}`);
  }

  saveRubro(rubro: Rubro) {
    console.log(rubro);
    const bod = {
      nombre: rubro,
    };
    console.log(bod);
    return this.http.post(`${this.API_URI}/rubros`, bod);
  }

  updateRubro(id: number, updatedRubro: Rubro): Observable<Rubro> {
    return this.http.put(`${this.API_URI}/rubros/${id}`, updatedRubro);
  }
}
