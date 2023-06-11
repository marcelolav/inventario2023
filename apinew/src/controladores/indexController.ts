import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'La API Funciona en /api/'});
    }

}

export const indexController = new IndexController;