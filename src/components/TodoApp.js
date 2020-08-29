import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import uuid from "uuid/dist/v4";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "World Hello", completed: false },
    { id: 1, task: "Hello World", completed: true },
    { id: 1, task: "Hello", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    // filters out removed todo
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    // calls setTodos with a new todos array
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

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
