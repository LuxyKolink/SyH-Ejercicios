import dotenv from "dotenv";
import express, { Application } from "express";
import path from "path";
import MysqlDB, { /*sequelize*/ } from "../../database/mysql.db";
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
            path: [
                path.join(__dirname, "../../config/.env.development"),
                path.join(__dirname, "../../../config/.env.development")
            ]
        });
        this.#aplicacion.use(express.urlencoded({ extended: true }))
        this.#aplicacion.use(express.json());
    }

    #rutas = (): void => {
        this.#aplicacion.use('/', this.servidorRouter.router)
        this.#aplicacion.use('*', this.servidorRouter.router)
    }

    start = async (): Promise<void> => {
        const db = new MysqlDB();
        try {
            await db.client.sync({
                force: false,
                logging: false 
            });
            console.log('Connection has been established successfully.');
            const port = process.env.PORT
            this.#aplicacion.listen(port, () => {
                const hostname = process.env.HOST ? process.env.HOST : "undefined";
                console.info(`Server running at http://${hostname}:${port}/`);
            });
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }


}