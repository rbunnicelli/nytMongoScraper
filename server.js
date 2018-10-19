//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//require all models
var db = require("./models");

//port config
const PORT = process.env.PORT || 3000;

//initialize express
var app = express();

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

//controller
var router = require("./controller/api.js");
app.use(router);
//set public folder as static directory
app.use(express.static("public"));

//connect to mongoDb. If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);


//start server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
})