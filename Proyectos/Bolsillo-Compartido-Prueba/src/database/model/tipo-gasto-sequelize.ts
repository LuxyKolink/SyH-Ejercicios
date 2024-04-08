import { DataTypes, Model, Sequelize } from "sequelize";
import Gasto from "./gasto-sequelize";

export default class TipoGasto extends Model {
    declare id: number
    declare descripcion: string

    static inicioTabla(sequelize: Sequelize) {
        TipoGasto.init({
            // Model attributes are defined here
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            descripcion: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'TipoGasto', // We need to choose the model name
            tableName: "tipogastos",
            // timestamps: false,
        });
    }

    static asociaciones(){
        TipoGasto.hasMany(Gasto)
    }
}