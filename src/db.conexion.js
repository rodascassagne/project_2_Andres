const mongoose = require("mongoose");


const conexionDB = async () => {

    try {
        mongoose.set('strictQuery', true);       
        const DB = await mongoose.connect(process.env.MONGODB_URI);
        console.log("conexion de forma satisfaxctoria", DB.connection.name);
            
    } catch (error) {
        console.log(error);
    }
}
module.exports = conexionDB;

