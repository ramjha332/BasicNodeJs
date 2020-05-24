const express = require('express')
const mongoose = require('mongoose')

//inserting the model here
const BlogModel = mongoose.model('Blog')


let testRoute = (req, res) => {
    console.log(req.params)
    res.send(req.params)
}//end test

let testQuery = (req, res) => {
    console.log(req.query)
    res.send(req.query)
}//end test

let testBody = (req, res) => {
    console.log(req.body)
    res.send(req.body)
}//end test

module.exports = {
    testRoute : testRoute,
    testQuery : testQuery,
    testBody : testBody
}