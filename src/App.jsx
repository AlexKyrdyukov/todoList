/* eslint-disable array-callback-return */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import {useDispatch, useSelector} from 'react-redux';
import { createStore, } from 'redux'



import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoLists from "./components/TodoLists";






const App = () => {


const dispatch = useDispatch();
const state = useSelector(state => state)


console.log(state)


  return (
    <>
      <Header
      />

      <TodoLists
      />
      <Footer
      />
    </>
  );
};
export default App;
