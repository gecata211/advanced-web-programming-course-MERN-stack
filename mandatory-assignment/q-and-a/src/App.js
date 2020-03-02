import React from "react";
import Questions from "./Questions";
import Question from "./Question";
import { Router } from "@reach/router";
import AskQuestion from "./AskQuestion";
import PostAnswer from "./PostAnswer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  getQuestion(slug) {
    return this.state.questions.find(question => question.slug === slug);
  }
  addQuestion(question) {
    this.setState(state => {
      let list = state.questions.concat(question);

      return {
        questions: list
      };
    });
  }
  addAnswer(answer, slug) {
    this.setState(state => {
      let list = [...state.questions];
      let question = state.questions.find((question, index) => {
        if (question.slug === slug) {
          list.splice(index, 1);
          return question;
        }
      });
      question.answers.push(answer);
      list.push(question);
      return {
        questions: list
      };
    });
  }

  render() {
    return (
      <Router>
        <Questions path="/" questions={this.state.questions} />
        <Question
          path="/question/:questionSlug"
          getQuestion={slug => this.getQuestion(slug)}
        />
        <AskQuestion
          path="/question/ask"
          addQuestion={question => this.addQuestion(question)}
        />
        <PostAnswer
          path="/question/:questionSlug/post-answer"
          getQuestion={slug => this.getQuestion(slug)}
          addAnswer={(answer, slug) => this.addAnswer(answer, slug)}
        />
      </Router>
    );
  }
}

export default App;
