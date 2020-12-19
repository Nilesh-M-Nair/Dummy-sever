const express = require('express');

const routes = express.Router();

routes.use('/',(req,res,next)=>{
    res.render('error',{docTitle:'Not Found'})
})

module.exports = routes;