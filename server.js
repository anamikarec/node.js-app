const express = require("express");
const app = express();
const connect = require("./app/config/db")
require("dotenv").config();


const Users = require('./app/routes/user.route')
app.use('/users',Users);
const PORT = process.env.PORT;
const start = async () => {
    await connect();
    app.listen(PORT,()=>{
        console.log(`listening on port ${PORT}`)
    })
}
start();
// module.exports = start;