import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import GlobalStyle from "./components/styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
