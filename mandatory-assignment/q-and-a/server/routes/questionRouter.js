import express from "express";
import Question from "../models/questionModel";

const questionRouter = express.Router();
(async _ => {
  questionRouter
    .route("/")
    .get((req, res) => {
      Question.find({}, (err, questions) => {
        res.json(questions);
      });
    })
    .post((req, res) => {
      console.log(req.body);
      new Question({
        slug: req.body.title
          .toLowerCase()
          .split(" ")
          .join("-"),
        title: req.body.title,
        answers: [],
        solved: false
      }).save(() => {
        Question.find({}, (err, questions) => {
          res.json(questions);
        });
      });
    });

  questionRouter
    .route("/:slug")
    .get((req, res) => {
      const slug = req.params.slug;
      Question.find({ slug: slug }, (err, question) => {
        res.json(question);
      });
    })
    .put((req, res) => {
      const slug = req.params.slug;

      let answer = req.body;
      answer.slug = answer.title
        .toLowerCase()
        .split(" ")
        .join("-");

      Question.findOneAndUpdate(
        { slug: slug },
        { $push: { answers: answer } },
        () => {
          Question.find({}, (err, questions) => {
            res.json(questions);
          });
        }
      );
    });

  questionRouter.route("/:questionSlug/:answerSlug").put((req, res) => {
    const questionSlug = req.params.questionSlug;
    const answerSlug = req.params.answerSlug;
    const newVote = req.body.newVoteNumber;

    Question.findOne({ slug: questionSlug }, (err, question) => {
      if (err) {
        console.log(err);
      }

      let questionToUpdate = (question.answers.find(
        answer => answer.slug === answerSlug
      )["voteNumber"] = newVote);

      Question.findOneAndUpdate(
        { slug: questionSlug },
        { $set: { answers: question.answers } },
        () => {
          Question.find({}, (err, questions) => {
            res.json(questions);
          });
        }
      );
      // question.save(() => {
      //   Question.find({}, (err, questions) => {
      //     res.json(questions);
      //   });
      // });
    });
  });
})();

export default questionRouter;
