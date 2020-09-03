import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodosProvider } from "../context/todos.context";

export default function TodoApp() {
  return (
    <div>
      <Container style={{ marginTop: "8rem", padding: "1rem" }}>
        <Row className='justify-content-md-center'>
          <Col md='8' xs='12' lg='8'>
            <TodosProvider>
              <TodoForm />
              <TodoList />
            </TodosProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
