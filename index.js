const express = require("express");
const path = require("path");

const { sequelize } = require("./dbconnect");
const { URRL } = require("./models/urldata");
const { router } = require("./routes/url");

const app = express();
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.get('/test',async(req,res)=>{
    const allurls = await URRL.findAll();
    console.log(allurls);
    res.render("home",{urls:allurls})
})
//sequelize.drop()
app.use("/url",router);
URRL.sync({force:false})

//const PORT = 5000;

app.listen(5000,()=>{
    console.log("Server Started........")
})