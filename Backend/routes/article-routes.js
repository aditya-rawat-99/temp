// Packages
const express = require("express");
const mongoose = require("mongoose");
const bson = require("bson");


// Project Imports
const dbModel = require("../models/model");


// router
const router = express.Router();


// Get article by ID
router.get("/:id",async(req,res)=>{
    const data = await dbModel.findById(req.params.id);
    res.send(data);
});

module.exports = router;