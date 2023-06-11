import express, { Router } from 'express';

import { proveedoresController } from '../controladores/proveedoresController';

class RubrosRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', proveedoresController.listaProveedores);
    this.router.get('/:id', proveedoresController.listaProveedor);
    this.router.post('/', proveedoresController.agregaProveedor);
    this.router.put('/:id', proveedoresController.actualizaProveedor);
    this.router.delete('/:id', proveedoresController.eliminaProveedor);
  }
}
export default new RubrosRoutes().router;
