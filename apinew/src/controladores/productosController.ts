import { Request, Response } from "express";
import pool from "../database";

class ProductosController {
     // Muestra todos los productos de la tabla productos
     public async listaProductos(req: Request, res: Response): Promise<void> {
          const productos = await pool.query("SELECT * FROM productos");
          res.json(productos);
     }
     // Muestra todos los productos de la tabla productos
     public async listaProductosRubros(req: Request, res: Response): Promise<void> {
          const productos = await pool.query("SELECT * FROM productos INNER JOIN rubros ON productos.rubroid = rubros.idrubros");
          res.json(productos);
     }
     // Muestra un solo producto de la tabla productos por ID
     public async listaProducto(req: Request, res: Response): Promise<any> {
          const { id } = req.params;
          const productos = await pool.query("SELECT * FROM productos WHERE idproductos = ?", [id]);
          console.log(productos.length);
          if (productos.length > 0) {
               return res.json(productos[0]);
          }
          res.status(404).json({ text: "El producto no existe!" });
     }

     // Muestra un solo producto de la tabla productos por codigobarra
     public async muestraPorCodigobarra(req: Request, res: Response): Promise<any> {
          const { codigobarra } = req.params;
          console.log(codigobarra);
          const productos = await pool.query("SELECT * FROM productos WHERE codigobarra = ?", [codigobarra]);
          console.log(productos.length);
          if (productos.length > 0) {
               return res.json(productos[0]);
          }
          res.status(404).json({ text: "El producto no existe!" });
     }

     // Agrega un producto
     public async agregaProducto(req: Request, res: Response): Promise<void> {
          const result = await pool.query("INSERT INTO productos set ?", [req.body]);
          res.json({ message: "Producto guardado con éxito!" });
     }
     // Actualiza un producto por numero de id
     public async actualizaProducto(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("UPDATE productos set ? WHERE idproductos = ?", [req.body, id]);
          res.json({ message: "El producto ha sido actualizado con éxito!" });
     }
     // Elimina un producto por numero de id
     public async eliminaProducto(req: Request, res: Response): Promise<void> {
          const { id } = req.params;
          await pool.query("DELETE FROM productos WHERE idproductos = ?", [id]);
          res.json({ message: "El producto ha sido eliminado con éxito!" });
     }
}

export const productosController = new ProductosController();
