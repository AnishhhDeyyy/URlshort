const Sequelize = require("sequelize");
const dbName = 'url';
const dbUser = 'root';
const dbPassword = '123456';

const sequelize = new Sequelize(dbName,dbUser,dbPassword,{
    host:'localhost',
    port:3306,
    dialect:'mysql'
})

const dbConnection = async()=>{
   try{
    await sequelize.authenticate();
    console.log("Databse connected Succesfully");
   }catch(err){
    console.log("Database not connceted",err)
   }
}

module.exports = {dbConnection,sequelize}