import { DataTypes, Model, Sequelize } from "sequelize";
import Gasto from "./gasto-modelo";

export default class Bolsillo extends Model {
    declare id: number
    declare vigencia: Date
    declare descripcion: string
    declare meta: number

    static inicioTabla(sequelize: Sequelize){
        Bolsillo.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            vigencia: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            descripcion: {
                type: DataTypes.STRING,
                allowNull: true
            },
            meta: {
                type: DataTypes.INTEGER,
                defaultValue: 0.0
            }
        }, {
            sequelize,
            tableName: "bolsillo",
            modelName: "Bolsillo",
            timestamps: false
        })
    }

    static asociacion(){
        Bolsillo.belongsToMany(Gasto, { through: "bolsillo_gasto" })
    }
}