import React from "react";
import "../styleComponents/TodoList.css";

function TodoList(props) {
  return (
    <div>
      <section>
        <ul>{props.children}</ul>
      </section>
    </div>
  );
}
export { TodoList };
