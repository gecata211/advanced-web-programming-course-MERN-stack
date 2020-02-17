import React from "react";

class ScoreRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.scoresData.id,
      nickname: props.scoresData.nickname,
      score: props.scoresData.score
    };
  }
  render() {
    return (
      <tr>
        <td>{this.props.scoresData.id}</td>
        <td>{this.props.scoresData.nickname}</td>
        <td style={{ textAlign: "right" }}>{this.props.scoresData.score}</td>
      </tr>
    );
  }
}
export default ScoreRow;
