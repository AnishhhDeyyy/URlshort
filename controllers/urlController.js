const { original } = require("parseurl");
const { URRL } = require("../models/urldata");
const shortid = require("shortid");
const { where } = require("sequelize");
const handleGenerateShortID = async(req,res)=>{
    const body = req.body;
    const shortID = shortid();
    if(!body.url){
         res.status(400).json({"err":"URL REQUIRED"});
    }
    console.log(body.url)
    await URRL.create(
        {shortid:shortID,
        originalurl:body.url}
    )
    return res.status(200).json({id:shortID});
}

const findTheOriginalUrl = async(req,res)=>{
    const shortid = req.params.shortid;

    const body = await URRL.findOne({where:{shortid:shortid}})
    if(body){
        body.click = body.click + 1;
        await body.save();
    }
    
    res.redirect(body.originalurl);
}

module.exports = {handleGenerateShortID,findTheOriginalUrl}