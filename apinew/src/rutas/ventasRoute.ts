import express, { Router } from "express";

import { ventasController } from "../controladores/ventasController";

class VentasRoute {
     router: Router = Router();

     constructor() {
          this.config();
     }

     config() {
          this.router.get("/", ventasController.listaVentas);
          this.router.get("/:id", ventasController.listaVenta);
          this.router.post("/", ventasController.agregaVenta);
          this.router.put("/:id", ventasController.actualizaVenta);
          this.router.delete("/:id", ventasController.eliminaVenta);
     }
}

export default new VentasRoute().router;
