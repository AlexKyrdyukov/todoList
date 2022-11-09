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
    setValueForFilter(filterValue)
    setValueForFilter.countComplete = 0
    const filterArray = [...arrayTodos].filter((item) => {
      if (item.complete) {
        setValueForFilter.countComplete++
      }
      if (filterValue === "complete" && item.completed === true) {
        return { ...item };
      } else if (filterValue === "active" && item.completed === false) {
        return { ...item };
      } else if (filterValue === "all") {
        return { ...item };
      }
    });
    return filterArray;
  };

  const arrayFiltresTodos = React.useMemo(() => {
    return handleFilterArray(valueForFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayTodos, valueForFilter]);
  console.log(arrayFiltresTodos)

  const filterTodos = React.useMemo(() => {
    localStorage.setItem("filterTodos", JSON.stringify(arrayFiltresTodos));
    return JSON.parse(localStorage.getItem('filterTodos'))
  }, [arrayFiltresTodos])

  const handleChangeRemoveTodo = (todoId, nameButton) => {
    const newTodoList = [...arrayTodos];
    const todoIndex = newTodoList.findIndex((todo) => todo.id === todoId);
    if (todoIndex === -1) {
      return;
    }
    if (nameButton === 'completed') {
      return newTodoList[todoIndex].complete = !newTodoList[todoIndex].complete;
    } else if (nameButton === 'delete') {
      console.log(nameButton, todoIndex, newTodoList)
      newTodoList.splice(todoIndex, 1)
      console.log(newTodoList)
      return newTodoList
    }
    setArrayTodos(newTodoList);
 
  };

  const createTodoElement = (text) => {
    setArrayTodos((prevsTate) => ([
      ...prevsTate,
      { title: text, completed: false, id: uuidv4() },
    ]));
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
    setArrayTodos(resultArr);
  };

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
