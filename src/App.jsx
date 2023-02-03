import Form from "./components/Form";
import Todo from "./components/Todo";

import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
   return (
      <div className="app">
         <h1>My Todos</h1>

         <Form />

         <h3>3 tasks remaining</h3>

         <div className="filter-container">
            <Button variant="outlined">All</Button>
            <Button variant="outlined">To do</Button>
            <Button variant="outlined">Done</Button>
         </div>

         <div className="todo-item-container">
            <Todo />
            <Todo />
         </div>
      </div>
   );
}

export default App;
