import express, { Router } from "express";

import { proveedoresController } from "../controladores/proveedoresController";

class ProveedoresRoute {
     router: Router = Router();

     constructor() {
          this.config();
     }

     config() {
          this.router.get("/", proveedoresController.listaProveedores);
          this.router.get("/:id", proveedoresController.listaProveedor);
          this.router.post("/", proveedoresController.agregaProveedor);
          this.router.put("/:id", proveedoresController.actualizaProveedor);
          this.router.delete("/:id", proveedoresController.eliminaProveedor);
     }
}
export default new ProveedoresRoute().router;
