const express = require('express');
const ejs = require('ejs');
require('dotenv').config();
const routes = express.Router();
const path = require('path');
let controler = require('../controler/controler.js')
const verifyJWT = require('../middleware/authMiddleware.js');

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
    let logindata = req.body;
    let loginres = await controler.checkpass(logindata);
    // console.log(loginres.token);
    // let token = loginres.token;
    res.json(loginres);

    // console.log(await loginres);

})
routes.post('/home',verifyJWT,(req,res)=>{
    res.status(200).json({ message: 'Protected route accessed' });
})
 
module.exports = routes;