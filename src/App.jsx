/* eslint-disable array-callback-return */
import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoLists from "./components/TodoLists";

const App = () => {
  return (
    <>
      <Header />
      <TodoLists />
      <Footer />
    </>
  );
};
export default App;
