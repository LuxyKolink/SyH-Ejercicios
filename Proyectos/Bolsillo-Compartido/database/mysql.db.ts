import { Sequelize } from "sequelize";
import Persona from "./models/personas-model";
import Ingresos from "./models/ingresos-model";

export default class Mysql {

    client: Sequelize
    host: string | undefined
    user: string | undefined
    db: string | undefined
    password: string | undefined
    port: string | undefined

    constructor() {
        this.host = process.env.MYSQLHOST
        this.user = process.env.MYSQLUSUARIO
        this.db = process.env.MYSQLDB
        this.password = process.env.MYSQLCONTRASENA
        this.port = process.env.MYSQLPUERTO
        this.client = new Sequelize(this.db!, this.user!, this.password, {
            host: this.host,
            port: Number(this.port),
            dialect: "mysql"
        })
    }

    autenticacion = async (): Promise<void> => {
        await this.client.authenticate();
        console.log('Conexión a base de datos establecida.');
    }

    sincronizacion = async (): Promise<void> => {
        this.#asociaciones()
        await this.client.sync({
            force: false,
            logging: false
        })
        console.log('Conexión a base de datos establecida.');
    }

    #asociaciones = (): void => {
        Persona.inicio(this.client)
        Ingresos.inicio(this.client)
        Persona.asociaciones()
        Ingresos.asociaciones()
    }
}