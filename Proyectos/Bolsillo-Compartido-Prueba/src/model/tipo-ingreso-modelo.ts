import { DataTypes, Model, Sequelize } from "sequelize";

export default class TipoIngreso extends Model {
    declare id: number
    declare descripcion: string

    static inicioTabla(sequelize: Sequelize) {
        TipoIngreso.init({
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
            modelName: 'TipoIngresos', // We need to choose the model name
            tableName: "tipoingresos",
            // timestamps: false,
        });
    }
}