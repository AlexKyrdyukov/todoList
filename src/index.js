import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./reduxStore/mainReduxToolkit/reducer";

import App from "./App";

import GlobalStyles from "./globalStyles/globalStyles.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);

reportWebVitals();
