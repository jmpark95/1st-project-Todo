import { useEffect, useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { nanoid } from "nanoid";

function App() {
   const [tasks, setTasks] = useState(() => {
      return JSON.parse(localStorage.getItem("tasks")) || [];
   });
   const [filter, setFilter] = useState("all");

   useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);

   let filterFunction;
   if (filter === "all") {
      filterFunction = (task) => task;
   } else if (filter === "todo") {
      filterFunction = (task) => task.completed === false;
   } else if (filter === "done") {
      filterFunction = (task) => task.completed === true;
   }

   const taskList = tasks.filter(filterFunction).map((task) => {
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

   function handleFilter(e, newFilter) {
      if (newFilter !== null) {
         setFilter(newFilter);
      }
   }

   const tasksRemainingLength = tasks.filter(
      (task) => task.completed === false
   ).length;

   return (
      <div className="app">
         <h1 style={{ color: "#1976d2" }}>To-do List</h1>

         <Form addTask={addTask} />

         <h3>
            {tasksRemainingLength}{" "}
            {tasksRemainingLength === 1 ? "task" : "tasks"} left
         </h3>

         <div className="filter-container">
            <ToggleButtonGroup
               value={filter}
               exclusive
               onChange={handleFilter}
               aria-label="text alignment"
               sx={{ maxWidth: "100%" }}
            >
               <ToggleButton value="all" aria-label="all">
                  All
               </ToggleButton>
               <ToggleButton value="todo" aria-label="todo">
                  Todo
               </ToggleButton>
               <ToggleButton value="done" aria-label="done">
                  Done
               </ToggleButton>
            </ToggleButtonGroup>
         </div>

         <div className="todo-item-container">{taskList}</div>
      </div>
   );
}

export default App;
