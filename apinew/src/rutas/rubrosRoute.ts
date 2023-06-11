import express, { Router } from 'express';

import { rubrosController } from '../controladores/rubrosController';

class RubrosRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', rubrosController.listaRubros);
    this.router.get('/:id', rubrosController.listaRubro);
    this.router.post('/', rubrosController.agregaRubro);
    this.router.put('/:id', rubrosController.actualizaRubro);
    this.router.delete('/:id', rubrosController.eliminaRubro);
  }
}
export default new RubrosRoutes().router;
