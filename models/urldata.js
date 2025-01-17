const { sequelize } = require("../dbconnect");
const {DataTypes} = require("sequelize")

const URRL = sequelize.define('URRL',{
  shortid:{
     type: DataTypes.STRING,
     required:true,
     allowNull:false
  },
  originalurl:{
    type: DataTypes.STRING,
     allowNull:false
  },
  click:{
    type:DataTypes.INTEGER,
    defaultValue:0
  }
},{
    tableName:"urls"
})

module.exports = {URRL};