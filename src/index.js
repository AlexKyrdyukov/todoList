import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import GlobalStyles from "./globalStyles/global.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

reportWebVitals();
