import { DataTypes, Model, Sequelize } from "sequelize";

export default class MaestroCuentas extends Model {
    declare mCtaCod: number;
    declare mCtaSalActual: number;

    static inicio(sequelize: Sequelize) {
        MaestroCuentas.init({
            mCtaCod: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            mCtaSalActual: {
                type: DataTypes.FLOAT,
                defaultValue: 0.00
            },
        }, {
            sequelize,
            tableName: "maestrocuentas",
            timestamps: false
        })
    }
}
