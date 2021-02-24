import React, { Component } from "react";
import Box from "./Box/box";
import Title from "./Title/title";

class App extends Component {
  state = {
    text: "Why tiptoe through life just to die safely.",
    author: "Ludacris",
  };

  render() {
    return (
      <React.Fragment>
        <Title title="Quote Generator" subTitle="By Shawn Clisby" />
        <Box text={this.state.text} author={this.state.author} />
      </React.Fragment>
    );
  }
}

export default App;
