/**** External libraries ****/
const express = require("express"); // The express.js library for implementing the API
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

/**** Configuration ****/
const appName = "Express API Template"; // Change the name of your server app!
const port = process.env.PORT || 8080; // Pick port 8080 if the PORT env variable is empty.
const app = express(); // Get the express app object.

app.use(bodyParser.json()); // Add middleware that parses JSON from the request body.
app.use(morgan("combined")); // Add middleware that logs all http requests to the console.
app.use(cors()); // Avoid CORS errors. https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

// Question Data
const questions = [
  {
    slug: "question-1",
    title: "question 1",
    answers: [
      { slug: "answer-1", title: "answer 1", voteNumber: 2 },
      { slug: "answer-2", title: "answer 2", voteNumber: 0 },
      { slug: "answer-3", title: "answer 3", voteNumber: 7 }
    ],
    solved: true
  },
  {
    slug: "question-2",
    title: "question 2",
    answers: [{ slug: "answer-1", title: "answer 1", voteNumber: 10 }],
    solved: false
  }
];

/**** Routes ****/

// Return all recipes in data
app.get("/api/questions", (req, res) => res.json(questions));

// // Return the recipe in data with its id equal to ':id' in the route below.
// app.get("/api/questions/:id", (req, res) => {
//   const id = req.params.id;
//   const question = questions.find(e => e.id === parseInt(id));
//   res.json(question);
// });

app.post("/api/questions", (req, res) => {
  const question = req.body;
  const newQuestion = {
    slug: question.title
      .toLowerCase()
      .split(" ")
      .join("-"),
    title: question.title,
    solved: false,
    answers: []
  };
  questions.push(newQuestion);
  res.json(questions);
});

app.put("/api/questions/:slug", (req, res) => {
  const slug = req.params.slug;

  const question = questions.find(question => question.slug === slug);
  question.answers.push(req.body);

  res.json(questions);
});

app.put("/api/questions/:questionSlug/:answerSlug", (req, res) => {
  const questionSlug = req.params.questionSlug;
  const answerSlug = req.params.answerSlug;

  const question = questions.find(question => question.slug === questionSlug);
  question.answers.find(answer => answer.slug === answerSlug).voteNumber =
    req.body.newVoteNumber;

  res.json(questions);
});

/**** Start! ****/
app.listen(port, () => console.log(`${appName} API running on port ${port}!`));
