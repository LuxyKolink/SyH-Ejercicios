// import { DataTypes, Sequelize } from "sequelize";
// import AsociadoModel from "./models/asociado-model";

import { Sequelize } from "sequelize"
import { Asociado } from "./models/asociado-model"

export const sequelize = new Sequelize(process.env.MYSQLDATABASE!, process.env.MYSQLUSER!, process.env.MYSQLPASSWORD, {
    host: process.env.MYSQLHOST,
    dialect: 'mysql',
    logging: false
})

export default class MysqlDB {

    client: Sequelize
    host: string | undefined
    user: string | undefined
    db: string | undefined
    password: string | undefined
    port: string | undefined

    constructor(){
        this.host = process.env.MYSQLHOST;
        this.user = process.env.MYSQLUSER;
        this.db = process.env.MYSQLDATABASE;
        this.password = process.env.MYSQLPASSWORD;
        this.port = process.env.MYSQLPORT;

        this.client = new Sequelize(this.db!, this.user!, this.password, {
            host: this.host,
            dialect: 'mysql'
        })

        this.models();

    }

    models = (): void => {
        new Asociado();
    }

}