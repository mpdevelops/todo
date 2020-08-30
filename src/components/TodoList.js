import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </ListGroup>
  );
}
