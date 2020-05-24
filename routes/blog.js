const express = require('express');
const blogController = require('./../controllers/blogController')
//const mongoose = require('mongoose')
// const Blog = mongoose.model('Blog')



let setRouter = (app) => {
    app.get('/test/route/:param1/:param2',blogController.testRoute)
    app.get('/test/query',blogController.testQuery)
    app.post('/test/body',blogController.testBody)
}

module.exports = {
    setRouter : setRouter
}