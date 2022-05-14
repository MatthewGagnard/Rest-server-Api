const express = require('express'); //import module: express
const app = express(); //express fxn to create app
const http = require('http'); //import module: http
const server = http.createServer(app); //create http server for app
const port = process.env.PORT||3000;
const {database} = require ('./config/database');
const mongoose = require('mongoose');

const mongoose_config = {useNewUrlParser: true, useUnifiedTopology: true};
const connection = mongoose.connect(database, mongoose_config);

if (connection){ //log connection result
    console.log('database connected');
    }
    else{
    console.log('database connection error')
    }    

const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-routes'); //import user-routes module
app.use(bodyParser.json()); //use body-parser for json
app.use('/', userRoutes);
app.use(express.static('public'));
app.get('/',getIndex);

app.listen(port,()=>console.log("Server is running port",port));

function getIndex(request,response){
    response.sendFile('./public/index.html', {root:__dirname})
}

