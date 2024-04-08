import express, { Application } from "express";
import Enrutador from "../routes/enrutador";
import ConexionDB from "../database/mysql.db";
import dotenv from "dotenv";
import path from "path";

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
        dotenv.config({
            path: path.join(__dirname, "..", "..", "config", ".env.development")
        })

    }

    #rutas = (): void => {
        this.#aplicacion.use('/', this.enrutador.router)
        this.#aplicacion.use('*', this.enrutador.router)
    }

    inicio = async (): Promise<void> => {
        const db = new ConexionDB();
        try {
            await db.sequelize.sync({ force: false, alter: true, logging: false })
            console.log('Conexión a la base de datos establecida correctamente.');
            const puerto = process.env.PUERTO
            this.#aplicacion.listen(puerto, () => {
                const nombreHost = process.env.HOST
                console.info(`Servidor corriendo en http://${nombreHost}:${puerto}/`)
            })
        } catch (error) {
            console.error('No fue posible realizar conexión a la base de datos:', error);
        }

    }

}