import { Request, Response } from "express";
import pool from "../database";

class ProveedoresController {
     // Muestra todos los proveedores
     public async listaProveedores(req: Request, res: Response): Promise<void> {
          const proveedores = await pool.query("SELECT * FROM proveedores");
          res.json(proveedores);
     }
     // Muestra un solo proveedor por ID
     public async listaProveedor(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const proveedor = await pool.query("SELECT * FROM proveedores WHERE idproveedor = ?", [id]);
          if (proveedor.length > 0) {
               return res.json(proveedor[0]);
          }
          res.status(404).json({ text: "El proveedor no existe!" });
     }
     // Agrega un proveedor
     public async agregaProveedor(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO proveedores set ?", [req.body]);
          res.json({ message: "Proveedor guardado con éxito!" });
     }
     // Actualiza un proveedor por numero de id
     public async actualizaProveedor(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          const fecha = new Date(req.body.fechaultimacompra).toLocaleDateString("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" });
          req.body.fechaultimacompra = fecha;
          await pool.query("UPDATE proveedores set ? WHERE idproveedor = ?", [req.body, id]);
          res.json({ message: "El proveedor ha sido actualizado con éxito!" });
     }
     // Elimina un proveedor por numero de id
     public async eliminaProveedor(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("DELETE FROM proveedores WHERE idproveedor = ?", [id]);
          res.json({ message: "El proveedor ha sido eliminado con éxito!" });
     }
}

export const proveedoresController = new ProveedoresController();
