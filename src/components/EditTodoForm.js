import React, { useContext } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import useInputState from "../hooks/useInputState";
import { TodosContext } from "../context/todos.context";

export default function EditTodoForm({ id, task, toggleEditForm }) {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{ width: "100%" }}
    >
      <InputGroup>
        <FormControl value={value} onChange={handleChange} />
      </InputGroup>
    </form>
  );
}
