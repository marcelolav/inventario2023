import express, { Router } from 'express';

import { carritoController } from '../controladores/carritoController';

class CarritoRoute {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', carritoController.listaCarrito);
    this.router.get('/totalcantidad/', carritoController.totalCantidadCarrito);
    this.router.get('/totalimporte/', carritoController.totalImporteCarrito);
    this.router.get('/:id', carritoController.listaItemCarrito);
    this.router.post('/', carritoController.agregaItemCarrito);
    this.router.put('/:id', carritoController.actualizaItemCarrito);
    this.router.delete('/:id', carritoController.eliminaItemCarrito);
    this.router.delete('/', carritoController.eliminarCarrito);
  }
}
export default new CarritoRoute().router;
