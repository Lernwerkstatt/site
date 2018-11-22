const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.engine('handlebar', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/home',(req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about',(req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/',(req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, hostname);
