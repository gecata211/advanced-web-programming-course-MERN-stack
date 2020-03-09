import React from "react";
import { Link, redirectTo, navigate } from "@reach/router";

class PostAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newAnswer: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  question = this.props.getQuestion(this.props.questionSlug);

  render() {
    return (
      <div className="post-answer">
        <h2>{this.question.title}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="post-answer__answer">
            <label htmlFor="answer">Answer</label>
            <textarea
              value={this.state.newAnswer}
              name="answer"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="post-answer__submit-button">
            <input type="submit" value="Post"></input>
          </div>
        </form>
        <Link to="/questions">Go back</Link>
      </div>
    );
  }
  handleChange(event) {
    this.setState({
      newAnswer: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.newAnswer) {
      let answerObj = {
        title: this.state.newAnswer,
        correct: false
      };

      this.props.addAnswer(answerObj, this.question.slug);
      this.setState({
        newAnswer: ""
      });
      navigate(`/question/${this.question.slug}`);
    }
  }
}

export default PostAnswer;
