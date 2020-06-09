// Packages
const express = require("express");
const mongoose = require("mongoose");

// Project Imports
const dbModel = require("../models/model");
const pageRouteModule = require("./page-routes")
const packingMethod = pageRouteModule.packingMethod;

// router
router = express.Router();


// GET-Route sorted by country
router.get("/:id/:country", async (req, res)=> {
    article = await dbModel.find({keywords:req.params.country});
    articleArray = packingMethod(article);

    const startSlice = req.params.id * 2;
    const endSlice = req.params.id + 2;
    res.send(articleArray.slice(startSlice, endSlice));
});


module.exports = router;