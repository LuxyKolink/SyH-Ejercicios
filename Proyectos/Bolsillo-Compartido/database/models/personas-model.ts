import { DataTypes, Model, Sequelize } from "sequelize";
import Ingresos from "./ingresos-model";

export default class Persona extends Model {
    declare id: number
    declare nombre: string
    declare email: string
    declare cc: number

    static asociaciones() {
        Persona.hasMany(Ingresos ,{
            foreignKey: "persona_id",
            sourceKey: "id",
        });
    }

    static inicio(sequelize: Sequelize) {
        Persona.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true
            },
            cc: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: "personas",
            timestamps: false,
        })
    }
}