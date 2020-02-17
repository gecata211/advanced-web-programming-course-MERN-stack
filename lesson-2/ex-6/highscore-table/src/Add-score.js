import React from "react";

class AddScore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "",
      score: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div style={{ width: "300px", marginTop: "30px", textAlign: "right" }}>
        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <label htmlFor="nickname">Nickname</label>
            <input
              style={{
                padding: "10px",
                borderRadius: "4px",
                outline: "none",
                border: "1px solid #666",
                marginTop: "5px",
                marginLeft: "10px",
                width: "50%"
              }}
              name="nickname"
              placeholder="nickname"
              type="text"
              value={this.state.nickname}
              onChange={this.handleChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <label htmlFor="score">Score</label>
            <input
              style={{
                padding: "10px",
                borderRadius: "4px",
                outline: "none",
                border: "1px solid #666",
                marginTop: "5px",
                marginLeft: "10px",
                width: "50%"
              }}
              name="score"
              placeholder="score"
              type="text"
              value={this.state.score}
              onChange={this.handleChange}
            />
          </div>
          <input
            type="submit"
            value="Add score to table"
            style={{
              padding: "10px",
              borderRadius: "4px",
              outline: "none",
              border: "1px solid #666",
              marginTop: "5px",
              width: "50%"
            }}
          />
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]:
        event.target.name == "score"
          ? Number(event.target.value)
          : event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addScore({
      nickname: this.state.nickname,
      score: this.state.score
    });
    // this.setState({
    //   nickname: "",
    //   score: ""
    // });
  }
}
export default AddScore;
