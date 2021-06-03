import styled, { css, createGlobalStyle } from "styled-components";

export const RoundedButton = styled.button`
  background-color: ${({ isBlue }) => (isBlue ? "white" : "blue")};
  border: none;
  color: white;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const GlobalStyle = createGlobalStyle`
	h1 {
        font-family: 'Comfortaa';
        font-weight: '200';
        font-size: 93;
        letter-spacing: -1.5
	}
        h2 {
        font-family: 'Comfortaa';
        font-weight: '200';
        font-size: 58;
        letter-spacing: -0.5
    }
    h3 {
        font-family: 'Comfortaa';
        font-weight: 'normal';
        font-size: 47;
        letter-spacing: 0
    }

    h4 {
        font-family: 'Comfortaa';
        font-weight: 'normal';
        font-size: 33;
        letter-spacing: 0.25
    }
    h5 {
        font-family: 'Comfortaa';
        font-weight: 'normal';
        font-size: 23;
        letter-spacing: 0
    }
    h6 {
        font-family: 'Comfortaa';
        font-weight: 'normal';
        font-size: 19;
        letter-spacing: 0.15
    }
    subtitle1 {
        font-family: 'Comfortaa';
        font-weight: 'normal';
        font-size: 16;
        letter-spacing: 0.15
    }
    .subtitle1 {
        font-family: 'Comfortaa';
        font-weight: 'normal';
        font-size: 16;
        letter-spacing: 0.15
    }
    subtitle2 {
        font-family: 'Comfortaa';
        font-weight: 'normal';
        font-size: 14;
        letter-spacing: 0.1
    }
    .subtitle2 {
        font-family: 'Comfortaa';
        font-weight: 'normal';
        font-size: 14;
        letter-spacing: 0.1
    }
    p {
        font-family: 'Roboto';
        font-weight: 'normal';
        font-size: 16;
        letter-spacing: 0.5
    }
    p2 {
        font-family: 'Roboto';
        font-weight: 'normal';
        font-size: 14;
        letter-spacing: 0.25
    }
    .p2 {
        font-family: 'Roboto';
        font-weight: 'normal';
        font-size: 14;
        letter-spacing: 0.25
    }
    buttontext {
        font-family: 'Roboto';
        font-weight: 'bold';
        font-size: 14;
        letter-spacing: 1.25
    }
    .buttontext {
        font-family: 'Roboto';
        font-weight: 'bold';
        font-size: 14;
        letter-spacing: 1.25
    }
    caption {
        font-family: 'Roboto';
        font-weight: 'normal';
        font-size: 12;
        letter-spacing: 0.4
    }
    overline {
        font-family: 'Roboto';
        font-weight: 'normal';
        font-size: 10;
        letter-spacing: 1.5;
        text-transform: capitalize;
    }
    .overline {
        font-family: 'Roboto';
        font-weight: 'normal';
        font-size: 10;
        letter-spacing: 1.5;
        text-transform: capitalize;
    }
`;
