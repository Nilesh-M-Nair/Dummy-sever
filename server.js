const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootPath = require('./utilities/rootPath');
const homeRoutes = require('./routes/home');
const addbookRoutes = require('./routes/add-book');
const errorRoutes = require('./routes/error');

const app = express();

app.set('view engine', 'pug');                          //Set template as PUG 
app.set('views', 'views');

app.use(express.static(path.join(rootPath,'public')));

app.use(bodyParser.urlencoded({extended:false}));

app.use(homeRoutes);
app.use(addbookRoutes.routes);
app.use(errorRoutes);

app.listen(5000)