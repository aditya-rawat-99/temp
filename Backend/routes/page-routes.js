// Packages
const express = require("express");
const mongoose = require("mongoose");

// Project Imports
const dbModel = require("../models/model");


// router
const router = express.Router();

// GET Route
router.get("/",async(req,res)=>{
    // const data = await dbModel.find();
    // res.send(data);
    var article;
    if(req.query.country){
        article = await dbModel.find({keywords:req.query.country});
    }else if(req.query.year){
        article = await dbModel.find({keywords:req.query.year});
    }else if(req.query.keys){
        article = await dbModel.find({keywords: req.query.keys});
    }
    else{
        article = await dbModel.find();
    }
    // articleArray = pack(article);

    // const IntegerParam = parseInt(req.params.id);
    // const startSlice = IntegerParam * 2;
    // const endSlice = startSlice + 2;

    res.send(article);
    // res.send(articleArray.slice(startSlice, endSlice));
});

// Get by Query
router.get("/:id", async(req, res) => {
    var article;
    if(req.query.country){
        article = await dbModel.find({keywords:req.query.country});
    }else if(req.query.year){
        article = await dbModel.find({keywords:req.query.year});
    }else if(req.query.keys){
        article = await dbModel.find({keywords: req.query.keys});
    }
    else{
        article = await dbModel.find();
    }
    articleArray = pack(article);

    const IntegerParam = parseInt(req.params.id);
    const startSlice = IntegerParam * 2;
    const endSlice = startSlice + 2;

    res.send(articleArray.slice(startSlice, endSlice));
});


// POST Route
router.post("/", async (req,res) => {
    const newData = new dbModel({
        Title: req.body.Title,
        Article: req.body.Article,
        Date: req.body.Date,
        keywords: req.body.keywords
    });

    try{
        await newData.save();
         res.send(newData);
    }catch(err){
        res.send(err);
    }
});


function pack(article){
    const articleArray = [];
    const articleSubArray = [];
    
    var n = 0;
    article.forEach(element => {
        if(articleSubArray.length != 3){
            articleSubArray.push(element);
        }else{
            articleArray.push(articleSubArray.splice(0,articleSubArray.length));
            articleSubArray.push(element);
        }
        n++;
        if(n === article.length && articleSubArray.length > 0){
            articleArray.push(articleSubArray.splice(0,articleSubArray.length));
        }
    });

    return articleArray;
}

// module.exports.router = router;
// module.exports.packingMethod = pack;

module.exports = {
    router: router,
    packingMethod: pack
}

