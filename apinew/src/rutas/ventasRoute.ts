import express, { Router } from "express";

import { ventasController } from "../controladores/ventasController";

class VentasRoute {
     router: Router = Router();

     constructor() {
          this.config();
     }

     config() {
          // Ventas Cabecera
          this.router.get("/cab/", ventasController.listaVentasCabecera);
          this.router.get("/cab/:id", ventasController.listaVentaCabecera);
          this.router.get("/cabcli/:id", ventasController.listaVentasCabeceraCliente);
          this.router.post("/cab/", ventasController.agregaVentaCabecera);
          this.router.put("/cab/:id", ventasController.actualizaVentaCabecera);
          this.router.delete("/cab/:id", ventasController.eliminaVentaCabecera);
          // ventas detalle
          this.router.get("/det/", ventasController.listaVentasDetalle);
          this.router.get("/detcomp/:id", ventasController.listaVentaDetalleComprobante);
          this.router.get("/detprod/:id", ventasController.listaVentaDetalleProducto);
          this.router.post("/det/", ventasController.agregaVentaDetalle);
          this.router.put("/det/:id", ventasController.actualizaVentaDetalle);
          this.router.delete("/det/:id", ventasController.eliminaVentaDetalle);
     }
}

export default new VentasRoute().router;
