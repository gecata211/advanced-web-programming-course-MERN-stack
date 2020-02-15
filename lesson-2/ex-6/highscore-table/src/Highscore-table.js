import React from "react";
import ScoreRow from "./Score-row";
import AddScore from "./Add-score";

class HighscoreTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: [
        {
          nickname: "Name1",
          score: 1000
        },
        {
          nickname: "Name3",
          score: 2000
        },
        {
          nickname: "Name2",
          score: 1500
        }
      ]
    };
    this.addScore = this.addScore.bind(this);
  }

  addScore(score) {
    this.setState(state => {
      let scores = state.scores.concat(score);
      return {
        scores: scores.sort((a, b) => b.score - a.score)
      };
    });
  }

  render() {
    let scoresToRender = [];
    let scoresArr = this.state.scores;
    scoresArr.sort((a, b) => b.score - a.score);
    scoresArr.forEach((score, index) => {
      scoresToRender.push(
        <ScoreRow
          key={index}
          scoresData={{
            id: index + 1,
            nickname: score.nickname,
            score: score.score
          }}
        />
      );
      console.log(scoresToRender);
    });

    return (
      <div className="table">
        <table style={{ width: "300px", textAlign: "left" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nickname</th>
              <th style={{ textAlign: "right" }}>Score</th>
            </tr>
          </thead>
          <tbody>{scoresToRender}</tbody>
        </table>
        <AddScore addScore={this.addScore} />
      </div>
    );
  }
}
export default HighscoreTable;
