import { DataTypes } from "sequelize";
import MysqlDB from "../mysql.db";

const sequelize = new MysqlDB()

export const MysqlUserModel = sequelize.client.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    timestamps: false
})
