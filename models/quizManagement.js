const mongoose = require("mongoose");

const quizManagementSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tags: {
        type: Array,   
    },
    questions: {
        type: Array,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now()
    },
    nameOfImage:String
});

module.exports = QuizManagement= mongoose.model("QuizManagement", quizManagementSchema);