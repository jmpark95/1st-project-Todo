import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

import Button from "@mui/material/Button";
import { nanoid } from "nanoid";

function App() {
   const INITIAL_DATA = [
      { id: nanoid(), name: "Todo1", completed: true },
      { id: nanoid(), name: "Todo2", completed: false },
   ];

   const [tasks, setTasks] = useState(INITIAL_DATA);

   const taskList = tasks.map((task) => {
      return (
         <Todo
            key={task.id}
            id={task.id}
            name={task.name}
            completed={task.completed}
         />
      );
   });

   function addTask(formInput) {
      setTasks([...tasks, { id: nanoid(), name: formInput, completed: false }]);
   }

   return (
      <div className="app">
         <h1>Todo List</h1>

         <Form addTask={addTask} />

         <h3>{taskList.length} tasks remaining</h3>

         <div className="filter-container">
            <Button variant="outlined">All</Button>
            <Button variant="outlined">To do</Button>
            <Button variant="outlined">Done</Button>
         </div>

         <div className="todo-item-container">{taskList}</div>
      </div>
   );
}

export default App;
