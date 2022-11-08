import React from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoLists from "./components/TodoLists";

const App = () => {
  const [arrayTodos, setArrayTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filterTodos, setFilterTodos] = React.useState("all");

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(arrayTodos));
  }, [arrayTodos]);

  const handleCompletedCounterValue = React.useMemo(() => {
    return arrayTodos.reduce((counter, item) => {
      if (item.complete) {
        counter++;
      }
      return counter;
    }, 0);
  }, [arrayTodos]);

  const createTodoElement = (text) => {
    setArrayTodos((prevsTate) => [
      ...prevsTate,
      { title: text, complete: false, id: uuidv4() },
    ]);
  };

  const handleCompleteTodo = (id) => {
    const resultArr = [...arrayTodos].map((item) => {
      if (item.id === id && !item.complete) {
        return { ...item, complete: true };
      } else if (item.id === id && item.complete) {
        return { ...item, complete: false };
      }
      return { ...item };
    });
    setArrayTodos(resultArr);
  };

  const handleFilterArray = (key) => {
    setFilterTodos(key);
    const filterArray = [...arrayTodos].filter((item) => {
      if (key === "complete") {
        if (item.complete) {
          return { ...item, complete: true };
        }
      } else if (key === "active") {
        if (!item.complete) {
          return { ...item, complete: false };
        }
      } else if (key === "all") {
        return { ...item };
      }
    });
    return filterArray;
  };

  const filterArr = React.useMemo(() => {
    return handleFilterArray(filterTodos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterTodos]);

  const handleDeleteTodo = (id) => {
    const resultArr = [...arrayTodos].filter((item) => item.id !== id);
    setArrayTodos(resultArr);
  };

  const handleEditTodo = (id, e) => {
    const resultArr = [...arrayTodos].map((item) =>
      item.id === id ? { ...item, title: e.target.value } : { ...item }
    );
    setArrayTodos(resultArr);
  };

  const handleCompleteTodoAll = () => {
    const resultArr = [...arrayTodos].map((item) => ({
      ...item,
      complete: true,
    }));
    console.log(resultArr);
    setArrayTodos(resultArr);
  };

  return (
    <>
      <Header
        onCompletedTodoAll={handleCompleteTodoAll}
        createTodoElement={createTodoElement}
      />
      <TodoLists
        onCompleteTodo={handleCompleteTodo}
        onDeleteTodo={handleDeleteTodo}
        onArrayTodos={filterArr}
        onEditTodo={handleEditTodo}
      />
      <Footer
        onArrayLength={arrayTodos.length}
        onComplitetedCounterValue={handleCompletedCounterValue}
        onFilterArray={handleFilterArray}
      />
    </>
  );
};
export default App;
