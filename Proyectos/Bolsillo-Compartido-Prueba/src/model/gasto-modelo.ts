import { DataTypes, Model, Sequelize } from "sequelize";
import TipoGasto from "./tipo-gasto-modelo";
import Persona from "./persona-modelo";
import Bolsillo from "./bolsillo-modelo";

export default class Gasto extends Model {
    declare id: number
    declare valor: number
    declare observacion: string

    static inicioTabla(sequelize: Sequelize) {
        Gasto.init({
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
            modelName: 'Gasto', // We need to choose the model name
            tableName: "gastos",
            // timestamps: false,
        });
    }

    static asociacion(){
        Gasto.belongsTo(TipoGasto)
        Gasto.belongsTo(Persona, {
            foreignKey: "personaId",
            targetKey: "id",
        })
        Gasto.belongsToMany(Bolsillo, { through: "bolsillo_gasto"})
    }
}