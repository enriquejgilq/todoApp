import React, { useContext } from "react";
import "../styleComponents/TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <div className="TodoCounter">
      <h1>
        {" "}
        Has completado {completedTodos} de {totalTodos} TODOs
      </h1>
    </div>
  );
}
export { TodoCounter };
