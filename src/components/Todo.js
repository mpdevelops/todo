import React from "react";
import useToggleState from "../hooks/useToggleState";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import * as Icon from "react-bootstrap-icons";
import FormCheck from "react-bootstrap/FormCheck";
import EditTodoForm from "./EditTodoForm";

export default function Todo({
  id,
  task,
  completed,
  removeTodo,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, toggle] = useToggleState();
  return (
    <ListGroupItem className='d-flex justify-content-between'>
      {isEditing ? (
        <EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle} />
      ) : (
        <>
          <FormCheck
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
            className='mt-1'
          />
          <h4
            style={{
              textDecoration: completed ? "line-through" : "none",
              marginTop: "0.5vh",
            }}
          >
            {task}
          </h4>
          <div>
            <Icon.Trash
              className='mr-4 mt-1'
              aria-label='Delete'
              onClick={() => removeTodo(id)}
              size={20}
            />
            <Icon.Pencil
              aria-label='Edit'
              size={20}
              className='mt-1'
              onClick={toggle}
            />
          </div>
        </>
      )}
    </ListGroupItem>
  );
}
