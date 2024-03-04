import { DataTypes } from "sequelize";
import MysqlDB from "../mysql.db";

const sequelize = new MysqlDB()

export const MysqlMaestroCuentasModel = sequelize.client.define("maestrocuentas", {
    MCtaCod: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    MCtaSalActual: {
        type: DataTypes.FLOAT,
        defaultValue: 0.00
    },
}, {
    timestamps: false
})
