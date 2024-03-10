const mongoose = require("mongoose")

const connect = async ()=>{
    const conn = await mongoose.connect(process.env.DB_CONNECT);
    conn ? console.log("DB CONNECTED !") : console.log(" DB ERROR !")
}
connect()
