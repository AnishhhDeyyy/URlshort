const express = require("express");

const { sequelize } = require("./dbconnect");
const { URRL } = require("./models/urldata");
const { router } = require("./routes/url");

const app = express();
app.use(express.json());
//sequelize.drop()
app.use("/url",router);
URRL.sync({force:false})

//const PORT = 5000;

app.listen(5000,()=>{
    console.log("Server Started........")
})