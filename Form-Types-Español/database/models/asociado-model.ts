import { DataTypes } from "sequelize";
import MysqlDB from "../mysql.db";
import dotenv from "dotenv";
import path from "path";
// import { MysqlMaestroCuentasModel } from "./maestrocuentas-model";
dotenv.config({
    path: [
        path.join(__dirname, "../../config/.env.development"),
        path.join(__dirname, "../../../config/.env.development")
    ]
});
const sequelize = new MysqlDB()

export const MysqlAsociadoModel = sequelize.client.define("asociados", {
    asoCod: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    asoNom: {
        type: DataTypes.STRING
    },
    asoEstado: {
        type: DataTypes.STRING,
        defaultValue: "A"
    }
}, {
    timestamps: false
})

// MysqlAsociadoModel.hasMany(MysqlMaestroCuentasModel, {
//     foreignKey: "AsoCod",
//     sourceKey: "AsoCod",
// });
// MysqlAsociadoModel.belongsTo(MysqlMaestroCuentasModel, { foreignKey: "projectId", targetKey: "id" });