import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "../styleComponents/TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const submit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={submit}>
      <label> Nuevo TODO </label>
      <textarea
        value={newTodoValue}
        placeholder="Nombre del TODO"
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          {" "}
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          {" "}
          Guardar
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
