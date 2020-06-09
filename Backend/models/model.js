const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Article:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    },

    keywords:[{
        type: String
    }]
});

module.exports = mongoose.model("articles", schema);    