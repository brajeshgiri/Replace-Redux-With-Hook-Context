import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import App from "./App";
import FavPage from "./FavPage";
import HomePage from "./HomePage";
import { StoreProvider } from "./store";
import "./index.css";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <HomePage path="/" />
        <FavPage path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
