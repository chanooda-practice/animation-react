import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import normalize from "styled-normalize";
import App from "./App";
import { darkTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body{
    width: 100vw;
    height: 300vh;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
