import express, { Application } from "express";
import Enrutador from "./router/enrutador";
import Mysql from "../../database/mysql.db";
// import { configDotenv } from "dotenv";
// import path from "path";

export default class Servidor {

    #aplicacion: Application

    constructor(
        private readonly enrutador: Enrutador
    ) {
        this.#aplicacion = express()
        this.#configuracion()
        this.#rutas()
    }

    #configuracion = (): void => {
        this.#aplicacion.use(express.urlencoded({ extended: true }))
        this.#aplicacion.use(express.json())
        /*
        configDotenv({
            path: [
                path.join(__dirname, '..', '..', "config", ".env.development"),
                path.join(__dirname, '..', '..', '..', "config", ".env.development")
            ]
        })
        */
    }

    #rutas = (): void => {
        this.#aplicacion.use('/', this.enrutador.router)
        this.#aplicacion.use('*', this.enrutador.router)
    }

    inicio = async (): Promise<void> => {
        const baseDeDatos = new Mysql();
        try {
            await baseDeDatos.sincronizacion()
            const puerto = process.env.PUERTO
            this.#aplicacion.listen(puerto, () => {
                const nombreHost = process.env.HOST
                console.info(`Servidor corriendo en http://${nombreHost}:${puerto}/`)
            })
        } catch (error) {
            console.error('No se pudo conectar a Mysql:', error);
        }

    }

}