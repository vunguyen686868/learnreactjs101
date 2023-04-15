import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, title: "Cow", status: "new" },
    { id: 2, title: "Cow2", status: "new" },
    { id: 3, title: "Cow3", status: "completed" },
    { id: 4, title: "Cow4", status: "new" },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const handledTodoClick = (todo, idx) => {
    console.log(todo, idx);

    //clone
    const newTodoList = [...todoList];

    //update item
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    //update todolist
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h1>Todo feature</h1>
      <TodoList todoList={todoList} onTodoClick={handledTodoClick} />
    </div>
  );
}

export default TodoFeature;
