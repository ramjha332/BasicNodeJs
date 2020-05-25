const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')
const mongoose = require('mongoose')
// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')

const app = express()

//middlewares
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(cookieParser())

//Bootstrap Route code
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')){
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
});// end of code

//Bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) require(modelsPath + '/' + file)
})//end Bootstrap models


app.listen(appConfig.port, () => {
    console.log(`Example app listening at http://localhost:${appConfig.port}`);
    let db = mongoose.connect(appConfig.db.uri, { useMongoClient: true });
})

//handling mongoose connection error
mongoose.connection.on('error',function(err){
    console.log('database connection error');
    console.log(err);
}); //end mongoose connection error

//handling mongoose success event
mongoose.connection.on('open', function(err){
    if(err){
        console.log("database error");
        console.log(err)
    } else {
        console.log("database connection open success");
    }
}); //end open connection mongoose handler

