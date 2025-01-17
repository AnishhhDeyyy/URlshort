const express = require("express");
const path = require("path");

const { sequelize } = require("./dbconnect");
const { URRL } = require("./models/urldata");
const { router } = require("./routes/url");
const { staticrouter } = require("./routes/staticrouter");
const exp = require("constants");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))


//sequelize.drop()
app.use("/url",router);
app.use("/",staticrouter)
URRL.sync({force:false});

//const PORT = 5000;

app.listen(5000,()=>{
    console.log("Server Started........")
})