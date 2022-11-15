/* eslint-disable array-callback-return */
import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoLists from "./components/TodoLists/TodoLists";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <TodoLists />
      <Footer />
    </>
  );
};
export default App;
