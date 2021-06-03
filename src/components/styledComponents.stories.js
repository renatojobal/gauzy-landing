import React from "react";
import { RoundedButton, GlobalStyle } from "./styles";
import "bootstrap/dist/css/bootstrap.css";

export default {
  title: "Styled components",
};

export const Typography = () => {
    return (
      <div>
        <GlobalStyle />
        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <h5>Headline 5</h5>
        <h6>Headline 6</h6>
        <subtitle1>Subtitle 1</subtitle1><br/>
        <subtitle2>Subtitle 2</subtitle2>
        <p>Body 1</p>
        <p2>Body 2</p2>
        <caption>Caption</caption>
        <buttontext>BUTTON</buttontext><br/>
        <overline>Overline</overline>

      </div>
    );
  };

export const roundedButton = () => {
  return <RoundedButton>Inicio</RoundedButton>;
};


