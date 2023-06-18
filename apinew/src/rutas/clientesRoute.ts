import express, { Router } from "express";

import { clientesController } from "../controladores/clientesController";

class RubrosRoutes {
     router: Router = Router();

     constructor() {
          this.config();
     }

     config() {
          this.router.get("/", clientesController.listaClientes);
          this.router.get("/:id", clientesController.listaCliente);
          this.router.post("/", clientesController.agregaagregaCliente);
          this.router.put("/:id", clientesController.actualizaCliente);
          this.router.delete("/:id", clientesController.eliminaCliente);
     }
}
export default new RubrosRoutes().router;
