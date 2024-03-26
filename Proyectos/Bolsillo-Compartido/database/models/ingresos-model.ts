import { DataTypes, Model, Sequelize } from "sequelize";
import Persona from "./personas-model";

export default class Ingresos extends Model {
    declare id: number
    declare valor: number
    declare observacion: string

    static asociaciones(){
        Ingresos.belongsTo(Persona, { foreignKey: "persona_id", targetKey: "id"})
    }

    static inicio(sequelize: Sequelize) {
        Ingresos.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            valor: {
                type: DataTypes.FLOAT,
                defaultValue: 0.0
            },
            observacion: {
                type: DataTypes.STRING,
            },
        }, {
            sequelize,
            tableName: "ingresos",
            timestamps: false,
        })
    }

}