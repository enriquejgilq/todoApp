import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../components/TodoForm";
function AppUi() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <div>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>error...</p>}
        {loading && <p>Cargando ...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDeleteTodo={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm> </TodoForm>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </div>
  );
}

export { AppUi };
