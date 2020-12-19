const express = require('express');

const book = [];

const routes = express.Router();

routes.get('/add-book',(req,res,next)=>{
    res.render('add-book',{docTitle:'Add-book'});
})

routes.post('/add-book',(req,res,next)=>{
    book.push(req.body);
    console.log(book)
    res.redirect('/home');
})

exports.routes = routes;
exports.book = book;