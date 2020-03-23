import React from "react";
import Questions from "./Questions";
import Question from "./Question";
import { Router, createHistory, navigate } from "@reach/router";
import AskQuestion from "./AskQuestion";
import PostAnswer from "./PostAnswer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    fetch("http://localhost:5656/api/questions")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          questions: data
        });
      });
  }

  getQuestion(slug) {
    return fetch(`http://localhost:5656/api/questions/${slug}`);
  }
  addQuestion(question) {
    fetch("http://localhost:5656/api/questions", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(question)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({
          questions: data
        });
      });
  }
  addAnswer(answer, slug) {
    fetch(`http://localhost:5656/api/questions/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(answer)
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({
          questions: data
        });
        navigate(`/questions/${slug}`);
      });
  }

  voteForAnswer(questionSlug, answerSlug, newVoteNumber) {
    console.log(newVoteNumber);
    fetch(`http://localhost:5656/api/questions/${questionSlug}/${answerSlug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ newVoteNumber: newVoteNumber })
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({
          questions: data
        });
        navigate(`/questions/${questionSlug}`);
      });
  }

  render() {
    return (
      <Router>
        <Questions path="/" questions={this.state.questions} />
        <Questions path="/questions" questions={this.state.questions} />
        <Question
          path="/questions/:questionSlug"
          getQuestion={slug => this.getQuestion(slug)}
          voteForAnswer={(questionSlug, answerSlug, newVoteNumber) =>
            this.voteForAnswer(questionSlug, answerSlug, newVoteNumber)
          }
        />
        <AskQuestion
          path="/questions/ask"
          addQuestion={question => this.addQuestion(question)}
        />
        <PostAnswer
          path="/questions/:questionSlug/post-answer"
          getQuestion={slug => this.getQuestion(slug)}
          addAnswer={(answer, slug) => this.addAnswer(answer, slug)}
        />
      </Router>
    );
  }
}

export default App;
