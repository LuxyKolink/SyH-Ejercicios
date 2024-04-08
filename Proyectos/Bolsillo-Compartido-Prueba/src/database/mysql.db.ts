import { Sequelize } from "sequelize";
import Persona from "./model/persona-sequelize";
import TipoIngreso from "./model/tipo-ingreso-sequelize";
import Ingreso from "./model/ingreso-sequelize";
import Gasto from "./model/gasto-sequelize";
import TipoGasto from "./model/tipo-gasto-sequelize";
import Bolsillo from "./model/bolsillo-sequelize";
import TipoBolsillo from "./model/tipo-bolsillo-sequelize";

export default class ConexionDB {

    sequelize: Sequelize
    bd: string | undefined
    usuario: string | undefined
    contrasena: string | undefined
    host: string | undefined
    puerto: string | undefined

    constructor(){
        this.bd = process.env.MYSQLBASEDEDATOS
        this.usuario = process.env.MYSQLNOMBREUSUARIO
        this.contrasena = process.env.MYSQLCONTRASENA
        this.host = process.env.MYSQLHOST
        this.puerto = process.env.MYSQLPUERTO
        this.sequelize = new Sequelize(this.bd!, this.usuario!, this.contrasena, {
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
        TipoBolsillo.asociaciones()
    }

}