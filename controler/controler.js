let route = require('../routes/registrationrout.js');
let model = require(`../model/model.js`);
const crypto = require('crypto');
function generatesalt(length = 4){
   
}
let salt = '';
exports.generatesalt = async function(data) {
    length = 4;
    for(let i=0;i<length;i++)
    {
        salt += String.fromCharCode(Math.floor(Math.random()*(122- 48 + 1))+48);
    }
    let activatestring = crypto.createHash('md5').update(salt).digest('hex');
    // console.log(activatestring);
    data.activatestring = activatestring;
    data.salt = salt;
    console.log(data);
    return await model.insertdata(data);
}
exports.generatehashpass = async function(passdata){
    let password = passdata.password;
    let concatedpass = password + salt;
    let hashpassword = crypto.createHash('md5').update(concatedpass).digest('hex');
    passdata.password = hashpassword;
    return await model.insertpass(passdata);
}
exports.checkpass = async function(logindata)
{
    return await model.checklogindata(logindata);
}

