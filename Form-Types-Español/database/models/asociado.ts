import { DataTypes, Model, Sequelize } from "sequelize";
// import { MaestroCuentas } from "./maestrocuentas-model";
// import { MaestroCuentas } from "./maestrocuentas-model";

export const Asociado = (sequelize: Sequelize) => {
    class Asociado extends Model {}

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
    return Asociado;
}

class AsociadoModel extends Model {}

    AsociadoModel.init({
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

// export const Asociado = sequelize.client.define("Asociado", {
//     asoCod: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     asoNom: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     asoEstado: {
//         type: DataTypes.STRING,
//         defaultValue: "A"
//     }
// }, {
//     // schema: "test",
//     tableName: "asociados",
//     timestamps: false,
// })

// Asociado.hasMany(MaestroCuentas ,{
//     foreignKey: "asoCod",
//     sourceKey: "asoCod",
// });
// Asociado.belongsTo(MaestroCuentas , { foreignKey: "asoCod", targetKey: "asoCod" });