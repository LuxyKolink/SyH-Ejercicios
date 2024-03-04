import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path";

export default class MysqlDB {

    client: Sequelize
    host: string | undefined
    user: string | undefined
    db: string | undefined
    password: string | undefined
    port: string | undefined

    constructor(){
        this.#configuracion()
        console.log(process.env.MYSQLPASSWORD);
        
        this.host = process.env.MYSQLHOST;
        this.user = process.env.MYSQLUSER;
        this.db = process.env.MYSQLDATABASE;
        this.password = process.env.MYSQLPASSWORD;
        this.port = process.env.MYSQLPORT;

        this.client = new Sequelize(this.db!, this.user!, this.password, {
            host: this.host,
            dialect: 'mysql'
        })

    }

    #configuracion = (): void => {
        dotenv.config({
            path: [
                path.join(__dirname, "../../config/.env.development"),
                path.join(__dirname, "../../../config/.env.development")
            ]
        });
    }

}