import { Request, Response } from "express";
import pool from "../database";

class ServiciosController {
     // Muestra los servicios pendientes
     public async listaServiciosPendientes(req: Request, res: Response): Promise<void> {
          const servicios = await pool.query("SELECT * FROM servicios WHERE reparado = 0");
          console.log("lista de no reparados teoricamente!!");
          res.json(servicios);
     }
     // Muestra todos los items de la tabla servicios
     public async listaServicios(req: Request, res: Response): Promise<void> {
          const servicios = await pool.query("SELECT * FROM servicios");
          res.json(servicios);
     }
     // Muestra un solo item de servicios por ID
     public async listaServicio(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const servicio = await pool.query("SELECT * FROM servicios WHERE idservicios = ?", [id]);
          if (servicio.length > 0) {
               return res.json(servicio[0]);
          }
          res.status(404).json({ text: "El servicio no existe!" });
     }
     // Agrega un item a la tabla servicios
     public async agregaServicio(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO servicios set ?", [req.body]);
          res.json({ message: "El servicio ha sido guardado con éxito!" });
     }
     // Actualiza un servicio por numero de id
     public async actualizaServicio(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE servicios set ? WHERE idservicios = ?", [req.body, id]);
          res.json({ message: "El servicio ha sido actualizado con éxito!" });
     }
     // Elimina un servicio por numero de id
     public async eliminaServicio(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("DELETE FROM servicios WHERE idservicios = ?", [id]);
          res.json({ message: "El servicio ha sido eliminado con éxito!" });
     }
}

export const serviciosController = new ServiciosController();
