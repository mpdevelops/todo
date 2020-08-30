import React, { useEffect } from "react";
import useTodoState from "../hooks/useTodoState";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Container style={{ marginTop: "8rem", padding: "1rem" }}>
        <Row className='justify-content-md-center'>
          <Col md='8' xs='12' lg='8'>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
