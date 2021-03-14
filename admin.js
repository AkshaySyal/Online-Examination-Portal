var express = require('express');
var router = express.Router();

router.get("/", async function (req, res) {
    res.render("adminPanel/adminPanel");
});

router.post("/questionSubmit", async function (req, res) {
    const {
        laQues_name,
        domain,
        mcqQues_name,
        mcq_opt_a,
        mcq_opt_b,
        mcq_opt_c,
        mcq_opt_d,
        mcq_ans,
        question_type,
    } = req.body;
    let questions = [];
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < question_type.length; i++) {
        if (question_type[i] === "MCQ") {
            questions.push({
                question: mcqQues_name[num1],
                options: [
                    mcq_opt_a[num1],
                    mcq_opt_b[num1],
                    mcq_opt_c[num1],
                    mcq_opt_d[num1],
                ],
                answer: mcq_ans[num1],
                type: "MCQ",
            });
            num1 += 1;
        } else if (question_type[i] === "LA") {
            questions.push({
                question: laQues_name[num2],
                type: "LA",
            });
            num2 += 1;
        }
    }

    if (domain === "ece") {
        let quizQuestions = new QuizEce({ questions });
        await quizQuestions.save();
        res.redirect("/admin");
    } else if (domain === "cse") {
        let quizQuestions = new QuizCse({ questions });
        await quizQuestions.save();
        res.redirect("/admin");
    } else if (domain === "design") {
        let quizQuestions = new QuizDesign({ questions });
        await quizQuestions.save();
        res.redirect("/admin");
    } else if (domain === "editorial") {
        let quizQuestions = new QuizEditorial({ questions });
        await quizQuestions.save();
        res.redirect("/admin");
    } else if (domain === "management") {
        let quizQuestions = new QuizManagement({ questions });
        await quizQuestions.save();
        res.redirect("/admin");
    } else if (domain === "photography") {
        let quizQuestions = new QuizPhotography({ questions });
        await quizQuestions.save();
        res.redirect("/admin");
    }
});

module.exports = router