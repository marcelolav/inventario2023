import express, { Router } from "express";

import { comprasController } from "../controladores/comprasController";

class ComprasRoute {
     router: Router = Router();

     constructor() {
          this.config();
     }

     config() {
          this.router.get("/cabecera", comprasController.getComprasCabeceras);
          this.router.get("/cabecera/:id", comprasController.getCompraCabecera);
          this.router.get("/detalle", comprasController.getComprasDetalles);
          this.router.get("/detalle/:id", comprasController.getCompraDetalle);
          this.router.post("/cabecera", comprasController.addCompraCabecera);
          this.router.post("/detalle", comprasController.addCompraDetalle);
     }
}
export default new ComprasRoute().router;
