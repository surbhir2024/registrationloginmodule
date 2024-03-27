const express = require('express');
const ejs = require('ejs');
require('dotenv').config();
const routes = express.Router();
const path = require('path');
const { stat } = require('fs/promises');
const { rejects } = require('assert');
let controler = require('../controler/controler.js')

routes.post('/registerdata', async(req, res) => {
    var userdata = req.body;
    var data = controler.generatesalt(userdata)
    // console.log(await data);
    res.json(await data);
})
routes.post('/updatepass',async(req,res)=>{
    passdata = req.body
    passres = controler.generatehashpass(passdata);
    res.json(passres);
})
routes.post('/logindata',async(req,res)=>{
    logindata = req.body;
    loginres = controler.checkpass(logindata);
    // console.log(await loginres);
    res.json(await loginres);

})

module.exports = routes;