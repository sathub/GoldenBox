import React from "react";
import ReactDOM from "react-dom";
import SearchMovie from "./SearchMovie";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Golden Box</h1>
        <SearchMovie />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
