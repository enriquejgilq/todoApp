import React, { useState, useEffect } from "react";
import { TodoProvider } from "./TodoContext";
import { AppUi } from "./AppUi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <AppUi />
      </TodoProvider>
    </div>
  );
}

export default App;
