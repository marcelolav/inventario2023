import express, { Router } from "express";

import { comprasController } from "../controladores/comprasController";

class ComprasRoute {
     router: Router = Router();

     constructor() {
          this.config();
     }

     config() {
          this.router.get("/", comprasController.listaCompras);
          this.router.get("/:id", comprasController.listaCompra);
          this.router.post("/", comprasController.agregaCompra);
          this.router.put("/:id", comprasController.actualizaCompra);
          this.router.delete("/:id", comprasController.eliminaCompra);
     }
}
export default new ComprasRoute().router;
