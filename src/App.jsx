/* eslint-disable array-callback-return */
import React from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoLists from "./components/TodoLists";

const App = () => {
  const [arrayTodos, setArrayTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [valueForFilter, setValueForFilter] = React.useState("all");
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(arrayTodos));
  }, [arrayTodos]);

  const handleFilterArray = (filterValue) => {
    setValueForFilter(filterValue);
    setValueForFilter.countComplete = 0;
    const filterArray = [...arrayTodos].filter((item) => {
      if (item.completed) {
        setValueForFilter.countComplete++;
      }
      if (filterValue === "completed" && item.completed === true) {
        return { ...item };
      } else if (filterValue === "active" && item.completed === false) {
        return { ...item };
      } else if (filterValue === "all") {
        return { ...item };
      }
    });
    return filterArray;
  };

  const handleChangeRemoveTodo = (todoId, nameButton) => {
    const newTodoList = [...arrayTodos];
    const todoIndex = newTodoList.findIndex((todo) => todo.id === todoId);
    if (todoIndex === -1) {
      return;
    }
    if (nameButton === "completed") {
      return (
        (newTodoList[todoIndex].completed = !newTodoList[todoIndex].completed),
        setArrayTodos(newTodoList)
      );
    }
    if (nameButton === "delete") {
      newTodoList.splice(todoIndex, 1);
      return setArrayTodos(newTodoList);
    }
  };

  const arrayFiltresTodos = React.useMemo(() => {
    return handleFilterArray(valueForFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayTodos, valueForFilter]);

  const filterTodos = React.useMemo(() => {
    localStorage.setItem("filterTodos", JSON.stringify(arrayFiltresTodos));
    return JSON.parse(localStorage.getItem("filterTodos"));
  }, [arrayFiltresTodos]);

  const createTodoElement = (text) => {
    setArrayTodos((prevsTate) => [
      ...prevsTate,
      { title: text, completed: false, id: uuidv4() },
    ]);
  };

  const handleEditTodo = (id, text) => {
    const resultArr = [...arrayTodos];
    const indexElem = resultArr.findIndex((item) => item.id === id);
    console.log(resultArr[indexElem].title, text);
    resultArr[indexElem].title = text;
    setArrayTodos(resultArr);
  };

  const handleCompleteTodoAll = () => {
    const resultArr = [...arrayTodos].map((item) => ({
      ...item,
      completed: true,
    }));
    setArrayTodos(resultArr);
  };
  console.log();
  return (
    <>
      <Header
        onCompletedTodoAll={handleCompleteTodoAll}
        createTodoElement={createTodoElement}
      />
      <TodoLists
        onChangeRemoveTodo={handleChangeRemoveTodo}
        arrayTodos={filterTodos}
        onEditTodo={handleEditTodo}
      />
      <Footer
        array={arrayTodos}
        completetedCounterValue={setValueForFilter.countComplete}
        onFilterArray={handleFilterArray}
      />
    </>
  );
};
export default App;
