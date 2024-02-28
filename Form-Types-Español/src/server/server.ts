import dotenv from "dotenv";
import express, { Application } from "express";
import path from "path";
import ServidorRouter from "./router/router";

export default class Servidor {
    #aplicacion: Application

    constructor(
        private readonly servidorRouter: ServidorRouter
    ) {
        this.#aplicacion = express()
        this.#configuracion()
        this.#rutas()
    }

    #configuracion = (): void => {
        dotenv.config({
            path: path.join(__dirname, "../../config/.env.development"),
        });
        this.#aplicacion.use(express.urlencoded({ extended: true }))
        this.#aplicacion.use(express.json());
    }

    #rutas = (): void => {
        this.#aplicacion.use('/', this.servidorRouter.router)
        this.#aplicacion.use('*', this.servidorRouter.router)
    }

    start = (): void => {
        const port = process.env.PORT
        this.#aplicacion.listen(port, () => {
            const hostname = process.env.HOST ? process.env.HOST : "undefined";
            console.info(`Server running at http://${hostname}:${port}/`);
          });
    }


}