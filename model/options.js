const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question"
    },
    option:{
        type:String,
        default:0,
    },
    votes:{
        type:Number,
        default:0, 
    }
});

const Option = mongoose.model("Option",optionSchema);

module.exports = Option;