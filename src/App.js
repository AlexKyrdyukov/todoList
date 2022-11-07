import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoLists from "./components/TodoLists/TodoLists";
import React from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [arrayTodos, setArrayTodos] = React.useState([]);

  const [filterTodos, setFilteTodos] = React.useState("all");
  const createTodoElement = (text) => {
    setArrayTodos((prevsTate) => [
      ...prevsTate,
      { title: text, complete: false, id: uuidv4() },
    ]);
  };
  const completeTodo = () => {};

  const deleteTodo = (id) => {
    const resulArr = arrayTodos.filter((item) => item.id !== id);
    setArrayTodos(resulArr);
  };
  console.log(arrayTodos);
  return (
    <>
      <Header createTodoElement={createTodoElement} />
      <TodoLists
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        arrayTodos={arrayTodos}
      />
      <Footer />
    </>
  );
}

export default App;
