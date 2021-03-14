const mongoose = require("mongoose");

const quizEditorialSchema = new mongoose.Schema({
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

module.exports = QuizEditorial= mongoose.model("QuizEditorial", quizEditorialSchema);