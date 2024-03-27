import { DataTypes, Model, Sequelize } from "sequelize";
import TipoIngreso from "./tipo-ingreso-modelo";
import Persona from "./persona-modelo";

export default class Ingreso extends Model {
    declare id: number
    declare valor: number
    declare observacion: string

    static inicioTabla(sequelize: Sequelize) {
        Ingreso.init({
            // Model attributes are defined here
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            valor: {
                type: DataTypes.FLOAT,
                defaultValue: 0.0,
            },
            observacion: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'Ingreso', // We need to choose the model name
            tableName: "ingresos",
            // timestamps: false,
        });
    }

    static asociacion(){
        Ingreso.belongsTo(TipoIngreso)
        Ingreso.belongsTo(Persona, {
            foreignKey: "personaId",
            targetKey: "id",
        })
    }
}