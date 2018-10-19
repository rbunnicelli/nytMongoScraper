//dependencies
var express = require("express");
var database = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

//GET route to scrape NYT
app.get("/scrape", function(req, res) {
    //grab body of HTML with axios
    axios.get("https://www.nytimes.com").then(function(response) {
        //load into cheerio and save to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        //grab articles within page with h2 element
        $("article").each(function(i, element) {
            var result = {};
        })
    })
})