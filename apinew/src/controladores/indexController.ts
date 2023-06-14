import { Request, Response } from "express";

class IndexController {
     public index(req: Request, res: Response) {
          res.send("<h1>La API Funciona correctamente en /api/ </h1>");
     }
}

export const indexController = new IndexController();
