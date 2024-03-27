import { DataTypes, Model, Sequelize } from "sequelize";

export default class TipoBolsillo extends Model {
    declare id: number
    declare descripcion: string

    static inicioTabla(sequelize: Sequelize) {
        TipoBolsillo.init({
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
            modelName: 'TipoBolsillo', // We need to choose the model name
            tableName: "tipobolsillo",
            // timestamps: false,
        });
    }

    // static asociaciones(){
    //     TipoBolsillo.hasMany(Ingreso)
    // }
}