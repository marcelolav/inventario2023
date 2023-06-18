import { Request, Response } from "express";
import pool from "../database";

class ClientesController {
     // Muestra todos los clientes
     public async listaClientes(req: Request, res: Response): Promise<void> {
          const clientes = await pool.query("SELECT * FROM clientes");
          res.json(clientes);
     }
     // Muestra un solo cliente por ID
     public async listaCliente(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const cliente = await pool.query("SELECT * FROM clientes WHERE idclientes = ?", [id]);
          if (cliente.length > 0) {
               return res.json(cliente[0]);
          }
          res.status(404).json({ text: "El cliente no existe!" });
     }
     // Agrega un cliente
     public async agregaagregaCliente(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO clientes set ?", [req.body]);
          res.json({ message: "cliente guardado con éxito!" });
     }
     // Actualiza un cliente por numero de id
     public async actualizaCliente(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE clientes set ? WHERE idclientes = ?", [req.body, id]);
          res.json({ message: "El cliente ha sido actualizado con éxito!" });
     }
     // Elimina un cliente por numero de id
     public async eliminaCliente(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("DELETE FROM clientes WHERE idclientes = ?", [id]);
          res.json({ message: "El cliente ha sido eliminado con éxito!" });
     }
}

export const clientesController = new ClientesController();
