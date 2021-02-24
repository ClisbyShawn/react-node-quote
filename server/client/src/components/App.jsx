import React, { Component } from "react";
import Box from "./Box/box";
import Button from "./Button/button";
import Title from "./Title/title";

class App extends Component {
  state = {
    text: "Why tiptoe through life just to die safely.",
    author: "Ludacris",
  };

  handleOnNextQuote = () => {
    console.log("Next Quote");
  };

  handleOnTweet = () => {
    console.log("POST Tweet");
  };

  render() {
    return (
      <React.Fragment>
        <Title
          title="Quote Generator"
          subTitle="By Shawn Clisby"
          styleId="title-container"
        />
        <Box text={this.state.text} author={this.state.author} />
        <Button label="Twitter" onClick={this.handleOnTweet} />
        <Button label="Next Quote" onClick={this.handleOnNextQuote} />
      </React.Fragment>
    );
  }
}

export default App;
