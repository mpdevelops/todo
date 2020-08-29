import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <Todo
          id={todo.id}
          task={todo.task}
          key={todo.id}
          completed={todo.completed}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </ListGroup>
  );
}
