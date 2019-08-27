let router = require('./router.js');


const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');


let app = express();

app.engine("html", ejs.renderFile);
app.set("view engine", "html");

//static assets
app.use(express.static("css"));
app.use(express.static("img"));

app.use(bodyParser.urlencoded({
    extended: false}));

app.use(bodyParser.json());

app.use("/", router);

app.listen(8080);

console.log('server is running at : http://localhost:8080/');