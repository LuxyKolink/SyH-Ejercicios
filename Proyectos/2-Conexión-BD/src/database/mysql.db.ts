import { Sequelize } from "sequelize";

export default class ConexionDB {

    sequelize: Sequelize
    baseDeDatos: string | undefined
    nombreUsuario: string | undefined
    contrasena: string | undefined
    host: string | undefined
    puerto: string | undefined

    constructor(){
        this.baseDeDatos = process.env.MYSQLBASEDEDATOS
        this.nombreUsuario = process.env.MYSQLNOMBREUSUARIO
        this.contrasena = process.env.MYSQLCONTRASENA
        this.host = process.env.MYSQLHOST
        this.puerto = process.env.MYSQLPUERTO
        this.sequelize = new Sequelize(this.baseDeDatos!, this.nombreUsuario!, this.contrasena, {
            host: this.host,
            dialect: "mysql",
            port: Number(this.puerto)
        });
    }

}