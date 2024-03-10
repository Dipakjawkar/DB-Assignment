const express = require("express")
require("dotenv").config()


const app = express();

require("./db/connect")

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`SERVER START ON ${PORT}`)
})
