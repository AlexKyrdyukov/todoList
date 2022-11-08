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
    // localStorage.setItem('todo', JSON.stringify(arrayTodos))
  };

  const completeTodo = (id, flag) => {
    const resultArr = [...arrayTodos].map((item) => {
      if (item.id === id && !flag) {
        completeTodo.countComplete++;
        return { ...item, complete: true };
      } else if (item.id === id && flag) {
        return { ...item, complete: false };
      } else if (!id && !flag) {
        return { ...item, complete: !flag };
      } else if (!id && flag) {
        return { ...item, complete: !flag };
      }
      return { ...item };
    });
    setArrayTodos(resultArr);
  };

  const handleFilterFuncTodos = React.useMemo(() => {
    // // eslint-disable-next-line array-callback-return
    //  [...arrayTodos].filter((item) => {
    //   if (key === "complete") {
    //     if (item.complete) {
    //       return { ...item, complete: true };
    //     }
    //   } else if (key === "active") {
    //     if (!item.complete) {
    //       return { ...item, complete: false };
    //     }
    //   } else if (key === "all") {
    //     return { ...item };
    //   }
    // });
  });

 
  const deleteTodo = (id) => {
    const resultArr = [...arrayTodos].filter((item) => item.id !== id);
    setArrayTodos(resultArr);
  };

  const handleEditTodo = (id, e) => {
    const resultArr = [...arrayTodos].map((item) =>
      item.id === id ? { ...item, title: e.target.value } : { ...item }
    );
    setArrayTodos(resultArr);
  };

  return (
    <>
      <Header
        completeTodo={completeTodo}
        createTodoElement={createTodoElement}
      />
      <TodoLists
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        onArrayTodos={arrayTodos}
        onEditTodo={handleEditTodo}
      />
      <Footer
        onFilterFuncTodos={handleFilterFuncTodos}
        onCounterAll={arrayTodos.length}
        onsetFilterTodos={setFilterTodos}
        onComplitetedCounterValue={handleCompletedCounterValue}
      />
    </>
  );
};
export default App;
