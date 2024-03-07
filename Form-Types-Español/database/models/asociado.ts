import { DataTypes, Model, Sequelize } from "sequelize";
import MaestroCuentas from "./maestrocuentas";

export default class Asociado extends Model {
    declare asoCod: number;
    declare asoNom: string;
    declare asoEstado: string;

    static asociacion(){
        Asociado.hasMany(MaestroCuentas ,{
            foreignKey: "asoCod",
            sourceKey: "asoCod",
        });
        Asociado.belongsTo(MaestroCuentas , { foreignKey: "asoCod", targetKey: "asoCod" });
    }

    static inicio(sequelize: Sequelize) {
        Asociado.init({
            asoCod: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            asoNom: {
                type: DataTypes.STRING,
                allowNull: false
            },
            asoEstado: {
                type: DataTypes.STRING,
                defaultValue: "A"
            }
        }, {
            sequelize,
            tableName: "asociados",
            timestamps: false,
        })
    }

}