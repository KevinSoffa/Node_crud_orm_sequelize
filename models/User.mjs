import { DataTypes } from "sequelize"
import db from '../db/conn.mjs'


// Criando  models - Objetos para o DB
const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
       type: DataTypes.BOOLEAN 
    }
})

export default User;