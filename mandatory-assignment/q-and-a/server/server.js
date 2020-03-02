/**** External libraries ****/
const express = require("express"); // The express.js library for implementing the API
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const serverless = require("serverless-http");
const router = express.Router();

/**** Configuration ****/
const appName = "Express API Template"; // Change the name of your server app!
const port = process.env.PORT || 8080; // Pick port 8080 if the PORT env variable is empty.
const app = express(); // Get the express app object.

// Question Data
const questions = [
  {
    slug: "question-1",
    title: "question 1",
    answers: [
      { title: "answer 1", correct: true },
      { title: "answer 2", correct: false },
      { title: "answer 3", correct: false }
    ],
    solved: true
  },
  {
    slug: "question-2",
    title: "question 2",
    answers: [{ title: "answer 1", correct: false }],
    solved: false
  }
];

/**** Routes ****/

// Return all recipes in data
router.get("/api/questions", (req, res) => res.json(questions));

// Return the recipe in data with its id equal to ':id' in the route below.
router.get("/api/questions/:id", (req, res) => {
  const id = req.params.id;
  const question = questions.find(e => e.id === parseInt(id));
  res.json(question);
});

router.post("/api/questions", (req, res) => {
  const title = req.body.title;
  const answers = req.body.answers;
  const newQuestion = {
    slug: title
      .toLowerCase()
      .split(" ")
      .join("-"),
    title: title,
    solved: answers.find(asnwer => asnwer.correct === true),
    answers: answers
  };
  questions.push(newQuestion);
  res.json(questions);
});

router.post("/api/recipes/:id/ingredients", (req, res) => {
  // TODO: Add new ingredient
});

// TODO: Example of handling PUT
// TODO: Example of handling DELETE

app.use(bodyParser.json()); // Add middleware that parses JSON from the request body.
app.use(morgan("combined")); // Add middleware that logs all http requests to the console.
app.use(cors()); // Avoid CORS errors. https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use("/.netlify/functions/server", router);

/**** Start! ****/
// app.listen(port, () => console.log(`${appName} API running on port ${port}!`));

module.exports = app;
module.exports.handler = serverless(app);
