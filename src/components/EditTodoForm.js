import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import useInputState from "../hooks/useInputState";

export default function EditTodoForm({ editTodo, task, id, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
      style={{ width: "100%" }}
    >
      <InputGroup>
        <FormControl value={value} onChange={handleChange} />
      </InputGroup>
    </form>
  );
}
