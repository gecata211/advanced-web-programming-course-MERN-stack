import express from "express";
import questionRouter from "./routes/questionRouter";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const db = mongoose.connect(
  "mongodb+srv://georgi-dimitrov:86m1sL06VD97b7uX@cluster0-qdyxt.mongodb.net/awp-q-and-a?retryWrites=true&w=majority"
);
const port = process.env.PORT || 5656;
const app = express();

app.use(bodyParser.json()); // Add middleware that parses JSON from the request body.
app.use(morgan("combined")); // Add middleware that logs all http requests to the console.
app.use(cors()); // Avoid CORS errors. https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

app.use("/api/questions", questionRouter);
// routes go here
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
