import { Request, Response } from "express";
import pool from "../database";

class VentasController {
     // Muestra todos los datos de la tabla ventas cabecera
     public async listaVentasCabecera(req: Request, res: Response): Promise<void> {
          const ventascabecera = await pool.query("SELECT * FROM ventascabecera INNER JOIN clientes ON ventascabecera.idclientes = clientes.idclientes GROUP BY ventascabecera.comprobante");
          res.json(ventascabecera);
     }
     // Muestra un solo registro de ventas cabecera
     public async listaVentaCabecera(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const ventas = await pool.query("SELECT * FROM ventascabecera WHERE idventascabecera = ?", [id]);
          console.log(ventas.length);
          if (ventas.length > 0) {
               return res.json(ventas[0]);
          }
          res.status(404).json({ text: "El registro de ventas no existe!" });
     }

     // Agrega un registro en ventas cabecera
     public async agregaVentaCabecera(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO ventascabecera set ?", [req.body]);
          res.json({ message: "Registro de ventas guardado con éxito!" });
     }
     // Actualiza registro de ventas cabecera por numero de id
     public async actualizaVentaCabecera(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE ventascabecera set ? WHERE idventascabecera = ?", [req.body, id]);
          res.json({ message: "El registro de ventas ha sido actualizado!" });
     }
     // Elimina un registro de ventas cabecera por numero de id
     public async eliminaVentaCabecera(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("DELETE FROM ventascabecera WHERE idventascabecera = ?", [id]);
          res.json({ message: "El registro de ventas ha sido eliminado" });
     }

     // Ventas detalles
     // Muestra todos los datos de la tabla ventas detalle
     public async listaVentasDetalle(req: Request, res: Response): Promise<void> {
          const ventascabecera = await pool.query("SELECT * FROM ventasdetalle INNER JOIN productos ON ventasdetalle.idproductos = productos.idproductos");
          res.json(ventascabecera);
     }
     // lista los datos de una venta detalle por id
     public async listaVentaDetalle(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const ventas = await pool.query("SELECT * FROM ventasdetalle WHERE idventasdetalle = ?", [id]);
          console.log(ventas.length);
          if (ventas.length > 0) {
               return res.json(ventas[0]);
          }
          res.status(404).json({ text: "El registro de ventas no existe!" });
     }
     // Agrega un registro en ventas detalle
     public async agregaVentaDetalle(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO ventasdetalle set ?", [req.body]);
          res.json({ message: "Registro de ventas guardado con éxito!" });
     }
     // Actualiza registro de ventas detalle por numero de id
     public async actualizaVentaDetalle(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE ventasdetalle set ? WHERE idventasdetalle = ?", [req.body, id]);
          res.json({ message: "El registro de ventas ha sido actualizado!" });
     }
     // Elimina un registro de ventas detalle por numero de id
     public async eliminaVentaDetalle(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("DELETE FROM ventasdetalle WHERE idventasdetalle = ?", [id]);
          res.json({ message: "El registro de ventas ha sido eliminado" });
     }
}

export const ventasController = new VentasController();
