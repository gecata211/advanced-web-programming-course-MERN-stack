import React from "react";
import { Link } from "@reach/router";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Error 404 Not found</h1>
        <h3>It looks like this page doesn't exist anymore.</h3>
      </div>
    );
  }
}

export default NotFound;
