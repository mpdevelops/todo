import React from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import useInputState from "../hooks/useInputState";

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}
    >
      <InputGroup size='lg' style={{ marginBottom: "1rem" }}>
        <FormControl
          aria-label='Large'
          aria-describedby='inputGroup-sizing-sm'
          value={value}
          onChange={handleChange}
          placeholder='Add New Todo'
        />
      </InputGroup>
    </form>
  );
}
