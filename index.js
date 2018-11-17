const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

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
