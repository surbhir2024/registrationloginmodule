const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const portfinder = require('portfinder');
const app = express();
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes/registrationrout');
const cookieParser = require('cookie-parser');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser())

app.use(cors());
portfinder.getPort(function(err,port){
    try {
        if(err)throw err
        app.listen(port,(error)=>{
            console.log("server Listenn at port"+port);
        });
    } catch (err) {
        console.log("Error on server port Listen : "+err)
    }
})
app.use(routes)