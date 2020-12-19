const express = require('express');

const bookList = require('../routes/add-book');

const routes = express.Router();

routes.use('/home',(req,res,home)=>{
    res.render('home',{books:bookList.book, docTitle:'Home'});
    // console.log(bookList);
})

module.exports = routes;