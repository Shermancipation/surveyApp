var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pollSchema = new mongoose.Schema({
    creator: {
        type: String,
        required: true
    },
    question:{
        type: String,
        required: true,
        minlength:8
    },
    option1:{
        type: String,
        required: true,
        minlength: 3,
    },
    option1votes:{
        type: Number,
    },
    option2:{
        type: String,
        required: true,
        minlength: 3,
    },
    option2votes:{
        type: Number,
    },
    option3:{
        type: String,
        required: true,
        minlength: 3,
    },
    option3votes:{
        type: Number,
    },
    option4:{
        type: String,
        required: true,
        minlength: 3,
    },
    option4votes:{
        type: Number,
    },
}, {timestamps:true});

var Poll = mongoose.model("Poll", pollSchema);