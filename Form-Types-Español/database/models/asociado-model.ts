import { DataTypes } from "sequelize";
import MysqlDB from "../mysql.db";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: [
        path.join(__dirname, "../../config/.env.development"),
        path.join(__dirname, "../../../config/.env.development")
    ]
});

const sequelize = new MysqlDB();
sequelize.client.sync({force: false})

export const MysqlAsociadoModel = sequelize.client.define("Asociado", {
    asoCod: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    asoNom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    asoEstado: {
        type: DataTypes.STRING,
        defaultValue: "A"
    }
}, {
    schema: "test",
    tableName: "asociados",
    timestamps: false,
})

// MysqlAsociadoModel.hasMany(MysqlMaestroCuentasModel, {
//     foreignKey: "AsoCod",
//     sourceKey: "AsoCod",
// });
// MysqlAsociadoModel.belongsTo(MysqlMaestroCuentasModel, { foreignKey: "asoCod", targetKey: "asoCod" });