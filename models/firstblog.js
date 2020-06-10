const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the schema
const FirstBlogSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    // user_image:{
    //     type: String,
    //     required: true
    // },
    data: {
        type: Date,
        default: Date.now()
    },
    title:{
        type: String,
        required: true
    },
    // content_image:{
    //     type: String,
    //     required: true
    // },
    first_para:{
        type: String,
        required: true
    },
    second_para:{
        type: String,
        required: false
    },
    third_para:{
        type: String,
        required: false
    },
    fourth_para:{
        type: String,
        required: false
    }
});

module.exports = FirstBlog = mongoose.model("firstblog", FirstBlogSchema);
