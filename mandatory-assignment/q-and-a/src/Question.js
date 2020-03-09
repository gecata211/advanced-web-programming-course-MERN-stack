import React from "react";
import { Link, navigate } from "@reach/router";

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  question = this.props.getQuestion(this.props.questionSlug);

  handleChange(index, event) {
    console.log(this.question.answers[index]);
    if (event.target.value) {
      this.props.voteForAnswer(
        this.question.slug,
        this.question.answers[index].slug,
        Number(this.question.answers[index].voteNumber) + 1
      );
    } else {
      this.props.voteForAnswer(
        this.question.slug,
        this.question.answers[index].slug,
        Number(this.question.answers[index].voteNumber) - 1
      );
    }
  }

  render() {
    let answers = [];

    this.question.answers.sort((a, b) => b.voteNumber - a.voteNumber);
    this.question.answers.forEach((answer, index) => {
      answers.push(
        <div key={index}>
          <h4>Answer {index + 1}</h4>
          <p>{answer.title}</p>
          <p>
            This answer is correct according to {answer.voteNumber} developers
          </p>

          <form>
            <label>Vote</label>
            <input
              type="checkbox"
              onChange={e => this.handleChange(index, e)}
            ></input>
          </form>
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
