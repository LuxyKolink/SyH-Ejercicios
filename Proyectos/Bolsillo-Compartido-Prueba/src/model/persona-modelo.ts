import { DataTypes, Model, Sequelize } from "sequelize";

export default class Persona extends Model {
    declare id: number
    declare nombre: string
    declare email: string
    declare cc: string

    static inicioTabla(sequelize: Sequelize) {
        Persona.init({
            // Model attributes are defined here
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            cc: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'Persona', // We need to choose the model name
            tableName: "persona",
            // timestamps: false,
        });
    }
}