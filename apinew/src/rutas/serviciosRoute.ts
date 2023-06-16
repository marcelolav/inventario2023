import express, { Router } from "express";

import { serviciosController } from "../controladores/serviciosController";

class ServiciosRoute {
     router: Router = Router();

     constructor() {
          this.config();
     }

     config() {
          this.router.get("/", serviciosController.listaServicios);
          this.router.get("/pendientes/", serviciosController.listaServiciosPendientes);
          this.router.get("/:id", serviciosController.listaServicio);
          this.router.post("/", serviciosController.agregaServicio);
          this.router.put("/:id", serviciosController.actualizaServicio);
          this.router.put("/entrega/:id", serviciosController.entregaService);
          this.router.delete("/:id", serviciosController.eliminaServicio);
     }
}

export default new ServiciosRoute().router;
