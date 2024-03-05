// import { DataTypes, Model, Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
// import { sequelize } from "../mysql.db";
import MysqlDB from "../mysql.db";

const sequelize = new MysqlDB();

export const Asociado = sequelize.client.define("Asociado", {
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
    schema: "test",
    tableName: "asociados",
    timestamps: false,
})

// import MysqlDB from "../mysql.db";
// import MysqlDB from "../mysql.db";
// import dotenv from "dotenv";
// import path from "path";

// dotenv.config({
//     path: [
//         path.join(__dirname, "../../config/.env.development"),
//         path.join(__dirname, "../../../config/.env.development")
//     ]
// });

// const sequelize = new MysqlDB();
// sequelize.client.sync({force: false})

// export const MysqlAsociadoModel = sequelize.client.define("Asociado", {
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
//     schema: "test",
//     tableName: "asociados",
//     timestamps: false,
// })


// export default class AsociadoModel {

//     sequelize: Sequelize

//     constructor(
        
//     ) {
//         this.sequelize = new MysqlDB().client
//         this.sequelize.define("Asociado", {
//             asoCod: {
//                 type: DataTypes.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true
//             },
//             asoNom: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             asoEstado: {
//                 type: DataTypes.STRING,
//                 defaultValue: "A"
//             }
//         }, {
//             schema: "test",
//             tableName: "asociados",
//             timestamps: false,
//         });
//     }
// }

//  class UserModel extends Model {
//     sequelize!: Sequelize;
    

// }

// export default UserModel.init({
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
//   sequelize, // We need to pass the connection instance
//   modelName: 'User' // We need to choose the model name
// });

// MysqlAsociadoModel.hasMany(MysqlMaestroCuentasModel, {
//     foreignKey: "AsoCod",
//     sourceKey: "AsoCod",
// });
// MysqlAsociadoModel.belongsTo(MysqlMaestroCuentasModel, { foreignKey: "asoCod", targetKey: "asoCod" });