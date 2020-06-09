// Packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Project Imports
const pageRouteModule = require("./routes/page-routes");
const page_route = pageRouteModule.router;

const article_route = require("./routes/article-routes");
const page_route_by_country = require("./routes/page-routes-by-country");



app = express();

// USE packages
app.use(bodyParser.json());
app.use(cors());


// USE Project Imports
app.use("/CURD",page_route);
app.use("/article",article_route);
app.use("/search-by-country",page_route_by_country);

// Port
const port = 3000

app.get("/",async (req,res) => {
    res.send("<h1>looks fine!</h1>");
});


mongoose.connect("mongodb://localhost:27017/HinduSufferingdb",{useNewUrlParser: true, useUnifiedTopology: true});

const database = mongoose.connection;
database.on("error", () => console.log("error"));
database.once("open",() =>{
    console.log("Connection established with database");
})

app.listen(port, () => [
    console.log(`Connected with server at post ${port}`)
]);