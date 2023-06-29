import { Request, Response } from "express";
import pool from "../database";

class ComprasController {
     // Muestra view  todas las compras con el join de producto y proveedores
     public async getComprasCabeceras(req: Request, res: Response): Promise<void> {
          const compras = await pool.query("SELECT * FROM vw_comprascabecerasimple");
          res.json(compras);
     }
     // Muestra una cabecera de compra por ID
     public async getCompraCabecera(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const compra = await pool.query("SELECT * FROM vw_comprascabecerasimple WHERE idcomprascabecera = ?", [id]);
          if (compra.length > 0) {
               return res.json(compra[0]);
          }
          res.status(404).json({ text: "El registro de compra no existe!" });
     }
     // Muestra view  todas las compras detalle limpia sin joins
     public async getComprasDetalles(req: Request, res: Response): Promise<void> {
          const compras = await pool.query("SELECT * FROM vw_comprascondetalle");
          res.json(compras);
     }
     // Muestra comprasdetalle de un comprobante por id de comprobante
     public async getCompraDetalle(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const compras = await pool.query("SELECT * FROM vw_comprascondetalle WHERE comprobante_detalle = ?", [id]);
          res.json(compras);
     }
     // Agrega cabecera de compra
     public async addCompraCabecera(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO comprascabecera set ?", [req.body]);
          res.json({ message: "Cabecera de compra guardada con éxito!" });
     }
     // Agrega detalle de compra
     public async addCompraDetalle(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO comprasdetalle set ?", [req.body]);
          res.json({ message: "Detalle de compra guardada con éxito!" });
     }
}

export const comprasController = new ComprasController();
