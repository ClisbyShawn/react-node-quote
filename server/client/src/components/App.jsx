import React, { Component } from "react";
import Box from "./Box/box";
import Button from "./Button/button";
import Title from "./Title/title";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        <Box
          text={this.state.text}
          author={this.state.author}
          styleId="box-container"
        />
        <div id="button-container">
          <Button
            label="Twitter"
            startIcon={
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ backgroundColor: "#1da1f2", marginRight: "5px" }}
              />
            }
            onClick={this.handleOnTweet}
            styleClass="button"
            styleId="button-tweet"
          />
          <Button
            label="Next Quote"
            endIcon={
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: "5px" }}
              />
            }
            onClick={this.handleOnNextQuote}
            styleClass="button"
            styleId="button-next-quote"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
