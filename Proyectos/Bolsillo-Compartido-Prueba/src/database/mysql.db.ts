import { Sequelize } from "sequelize";
import Persona from "../model/persona-modelo";
import TipoIngreso from "../model/tipo-ingreso-modelo";
import Ingreso from "../model/ingreso-modelo";
import Gasto from "../model/gasto-modelo";
import TipoGasto from "../model/tipo-gasto-modelo";
import Bolsillo from "../model/bolsillo-modelo";
import TipoBolsillo from "../model/tipo-bolsillo-modelo";

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
        this.sincronizar()
    }

    sincronizar(){
        Persona.inicioTabla(this.sequelize)
        Ingreso.inicioTabla(this.sequelize)
        TipoIngreso.inicioTabla(this.sequelize)
        Gasto.inicioTabla(this.sequelize)
        TipoGasto.inicioTabla(this.sequelize)
        Bolsillo.inicioTabla(this.sequelize)
        TipoBolsillo.inicioTabla(this.sequelize)
        Persona.asociaciones()
        Ingreso.asociacion()
        Gasto.asociacion()
        Bolsillo.asociacion()
        TipoIngreso.asociaciones()
        TipoGasto.asociaciones()
    }

}