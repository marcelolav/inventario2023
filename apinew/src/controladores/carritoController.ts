import { Request, Response } from 'express';
import pool from '../database';

class CarritoController {
  // Muestra todos los items de la tabla carrito
  public async listaCarrito(req: Request, res: Response): Promise<void> {
    const rubros = await pool.query('SELECT * FROM carrito');
    res.json(rubros);
  }
  // Muestra un solo item de carrito de la tabla carrito por ID
  public async listaItemCarrito(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const itemcarrito = await pool.query(
      'SELECT * FROM carrito WHERE idcarrito = ?',
      [id]
    );
    if (itemcarrito.length > 0) {
      return res.json(itemcarrito[0]);
    }
    res.status(404).json({ text: 'El item del carrito no existe!' });
  }
  // Agrega un item a la tabla carrito
  public async agregaItemCarrito(req: Request, res: Response): Promise<void> {
    const result = await pool.query('INSERT INTO carrito set ?', [req.body]);
    res.json({ message: 'El ítem ha sido guardado con éxito!' });
  }
  // Actualiza un item del carrito por numero de id
  public async actualizaItemCarrito(
    req: Request,
    res: Response
  ): Promise<void> {
    const { id } = req.params;
    await pool.query('UPDATE carrito set ? WHERE idcarrito = ?', [
      req.body,
      id,
    ]);
    res.json({ message: 'El ítem del carrito ha sido actualizado con éxito!' });
  }
  // Elimina un item del carrito por numero de id
  public async eliminaItemCarrito(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM carrito WHERE idcarrito = ?', [id]);
    res.json({ message: 'El item del carrito ha sido eliminado con éxito!' });
  }
  // Elimina todo el carrito
  public async eliminarCarrito(req: Request, res: Response): Promise<void> {
    const result = await pool.query('DELETE * FROM carrito');
    res.json({ message: 'El ítem ha sido guardado con éxito!' });
  }
}

export const carritoController = new CarritoController();
