import { Request, Response } from "express";
import pool from "../database";

class VentasController {
     // Muestra todos los datos de la tabla ventas
     public async listaVentas(req: Request, res: Response): Promise<void> {
          const productos = await pool.query("SELECT * FROM ventas");
          res.json(productos);
     }
     // Muestra un solo registro de ventas
     public async listaVenta(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const productos = await pool.query("SELECT * FROM ventas WHERE idventas = ?", [id]);
          console.log(productos.length);
          if (productos.length > 0) {
               return res.json(productos[0]);
          }
          res.status(404).json({ text: "El registro de ventas no existe!" });
     }

     // Agrega un registro en ventas
     public async agregaVenta(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO ventas set ?", [req.body]);
          res.json({ message: "Registro de ventas guardado con éxito!" });
     }
     // Actualiza registro de ventas por numero de id
     public async actualizaVenta(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE ventas set ? WHERE idventas = ?", [req.body, id]);
          res.json({ message: "El registro de ventas ha sido actualizado!" });
     }
     // Elimina un registro de ventas por numero de id
     public async eliminaVenta(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("DELETE FROM ventas WHERE idventas = ?", [id]);
          res.json({ message: "El registro de ventas ha sido eliminado" });
     }
}

export const ventasController = new VentasController();
