import { Request, Response } from "express";
import pool from "../database";

class RubrosController {
     // Muestra todos los rubros de la tabla rubros
     public async listaRubros(req: Request, res: Response): Promise<void> {
          const rubros = await pool.query("SELECT * FROM rubros");
          res.json(rubros);
     }
     // Muestra un solo rubro de la tabla rubros por ID
     public async listaRubro(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const rubros = await pool.query("SELECT * FROM rubros WHERE idrubros = ?", [id]);
          if (rubros.length > 0) {
               return res.json(rubros[0]);
          }
          res.status(404).json({ text: "El rubro no existe!" });
     }
     // Agrega un rubro
     public async agregaRubro(req: Request, res: Response): Promise<void> {
          const body = req.body;
          const result = await pool.query("INSERT INTO rubros SET ?", [req.body]);

          res.json({ message: "El rubro ha sido agregado con éxito." });
     }
     // Actualiza un rubro por numero de id
     public async actualizaRubro(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE rubros set ? WHERE idrubros = ?", [req.body, id]);
          res.json({ message: "El rubro ha sido actualizado con éxito!" });
     }
     // Elimina un rubro por numero de id
     public async eliminaRubro(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("DELETE FROM rubros WHERE idrubros = ?", [id]);
          res.json({ message: "El rubro ha sido eliminado con éxito!" });
     }
}

export const rubrosController = new RubrosController();
