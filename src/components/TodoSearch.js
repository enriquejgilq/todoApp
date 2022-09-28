import React, { useContext } from "react";
import "../styleComponents/TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch({}) {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchTodo = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <input
        className="TodoSearch"
        placeholder="TODO"
        onChange={onSearchTodo}
        value={searchValue}
      />
    </div>
  );
}
export { TodoSearch };
