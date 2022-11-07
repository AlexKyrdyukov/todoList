import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TodoLists from "./components/TodoLists/TodoLists";
import React from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  // const [todoTitle, setTodoTitle] = React.useState("");
  const [arrayTodos, setArrayTodos] = React.useState([]);
  const [filterArrayTodos, setFilterArrayTodos] = React.useState('completed');
  // React.useEffect(() => {
  //   arrayTodos.map((item) => ({
  //     title: todoTitle,
  //     isCompleted: false,
  //     id: uuidv4(),
  //   }));
  // }, [arrayTodos, todoTitle]);

  return (
    <>
      <Header onConfirm={(text) => {console.log(text)}} />
      <TodoLists />
      <Footer />
    </>
  );
}

export default App;
