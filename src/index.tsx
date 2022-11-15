import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import GlobalStyles from "./globalStyles/globalStyles";

import { store } from "./reduxStore/mainReduxToolkit/store";


const root = ReactDOM.createRoot(document.getElementById("root")as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
   </Provider>
);


