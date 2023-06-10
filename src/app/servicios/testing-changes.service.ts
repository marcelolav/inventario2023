import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrito } from '../modelos/carrito';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class testingChangesService {
  private serviceUrl = 'https://localhost:3000/carrito/test';

  constructor(private http: HttpClient) {}

  getCarrito(): Observable<Carrito[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<Carrito[]>(map((data: any) => data.carrito));
  }
}