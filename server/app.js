/* eslint-disable no-unused-vars */
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
// const router = require('./routers');

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

// app.use(router);
app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 5000);

app.use((req, res, next) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', '404.html'));
});

app.use((err, req, res, next) => {
  res.sendFile(join(__dirname, '..', 'public', 'html', '500.html'));
});

module.exports = app;
