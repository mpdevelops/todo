import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Todo from "./Todo";
import { TodosContext } from "../context/todos.context";

export default function TodoList() {
  const { todos } = useContext(TodosContext);
  return (
    <ListGroup>
      {todos.map((todo, i) => (
        // To add a key to a fragment, we have to use the long-hand version
        // rather than <> </>, we have to use <React.Fragment>
        <React.Fragment key={i}>
          <Todo {...todo} key={todo.id} />
          {i < todos.length - 1}
        </React.Fragment>
      ))}
    </ListGroup>
  );
}
