import { Request, Response } from "express";
import pool from "../database";

class ComprasController {
     // Muestra todas las compras con el join de producto y proveedores
     public async listaCompras(req: Request, res: Response): Promise<void> {
          const compras = await pool.query("SELECT * FROM compras INNER JOIN proveedores ON compras.idproveedores = proveedores.idproveedores INNER JOIN productos ON compras.idproductos = productos.idproductos");
          res.json(compras);
     }
     // Muestra una compra por ID
     public async listaCompra(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const compra = await pool.query("SELECT * FROM compras WHERE idcompras = ?", [id]);
          if (compra.length > 0) {
               return res.json(compra[0]);
          }
          res.status(404).json({ text: "El registro de compra no existe!" });
     }
     // Muestra las compras de un mismo comprobante
     public async listaCompraComprobante(req: Request, res: Response): Promise<any> {
          const { comprobante } = req.params;
          const compras = await pool.query("SELECT * FROM compras WHERE comprobante = ?", [comprobante]);
          res.json(compras);

          // res.status(404).json({ text: "El registro de compra no existe!" });
     }
     // Agrega una compra
     public async agregaCompra(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO compras set ?", [req.body]);
          res.json({ message: "compra guardada con éxito!" });
     }
     // Actualiza una compra por numero de id
     public async actualizaCompra(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE compras set ? WHERE idcompras = ?", [req.body, id]);
          res.json({ message: "La compra ha sido actualizado con éxito!" });
     }
     // Elimina una compra por numero de id
     public async eliminaCompra(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("DELETE FROM compras WHERE idcompras = ?", [id]);
          res.json({ message: "La compra ha sido eliminado con éxito!" });
     }
}

export const comprasController = new ComprasController();
