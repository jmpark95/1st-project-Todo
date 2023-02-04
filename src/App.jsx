import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

import Button from "@mui/material/Button";
import { nanoid } from "nanoid";

function App() {
   const INITIAL_DATA = [
      { id: nanoid(), name: "Todo1", completed: false },
      { id: nanoid(), name: "Todo2", completed: false },
      { id: nanoid(), name: "Todo3", completed: false },
   ];

   const [tasks, setTasks] = useState(INITIAL_DATA);

   const taskList = tasks.map((task) => {
      return (
         <Todo
            key={task.id}
            id={task.id}
            name={task.name}
            completed={task.completed}
            updatedCompletedStatus={updatedCompletedStatus}
            updateName={updateName}
            deleteTask={deleteTask}
         />
      );
   });

   function addTask(formInput) {
      setTasks([...tasks, { id: nanoid(), name: formInput, completed: false }]);
   }

   function updatedCompletedStatus(id) {
      setTasks(
         tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
         )
      );
   }

   function updateName(id, editingFieldText) {
      setTasks(
         tasks.map((task) =>
            task.id === id ? { ...task, name: editingFieldText } : task
         )
      );
   }

   function deleteTask(id) {
      setTasks(tasks.filter((task) => task.id !== id));
   }

   const tasksRemainingLength = tasks.filter(
      (task) => task.completed === false
   ).length;

   return (
      <div className="app">
         <h1 style={{ color: "#1976d2" }}>Todo List</h1>

         <Form addTask={addTask} />

         <h3>
            {tasksRemainingLength}{" "}
            {tasksRemainingLength === 1 ? "task" : "tasks"} left
         </h3>

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
