import { Router, Request, Response } from "express";

export default class Enrutador {

    router: Router

    constructor() {
        this.router = Router()
        this.#rutas()
    }

    #rutas = (): void => {
        this.router.get('/', (_req: Request, res: Response) => {
            res.send("Hola SyH")
        })
        this.router.post('/', (req: Request, res: Response) => {
            console.log(req.body);
            res.send(req.body)
        })
    }

}