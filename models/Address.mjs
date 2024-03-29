import { DataTypes } from "sequelize";
import db from '../db/conn.mjs'
import User from '../models/User.mjs'


const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
})

// Relação com User
User.hasMany(Address)
Address.belongsTo(User)

export default Address