const { handleGenerateShortID, findTheOriginalUrl } = require("../controllers/urlController");
const { URRL } = require("../models/urldata");
const express = require("express")
const router  =  express.Router();


router.post('/',handleGenerateShortID);

router.get('/:shortid',findTheOriginalUrl);



//router.get('/test',forRender);

module.exports = {router}