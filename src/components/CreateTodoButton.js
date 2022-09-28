import React from "react";
import "../styleComponents/CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <div className="divBtn">
      <button className="CreateTodoButton" onClick={onClickButton}>
        +
      </button>
    </div>
  );
}
export { CreateTodoButton };
