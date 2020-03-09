import React from "react";
import { Link } from "@reach/router";

class Question extends React.Component {
  question = this.props.getQuestion(this.props.questionSlug);
  render() {
    let answers = [];

    this.question.answers.forEach((answer, index) => {
      answers.push(
        <div key={index}>
          <h4>Answer {index + 1}</h4>
          <p>{answer.title}</p>
        </div>
      );
    });

    return (
      <div className="question">
        <h2 className="question__title">{this.question.title}</h2>
        <div className="question__answers">{answers}</div>

        <Link to={`/questions/${this.question.slug}/post-answer`}>
          <div>You know the answer?</div>
        </Link>

        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default Question;
