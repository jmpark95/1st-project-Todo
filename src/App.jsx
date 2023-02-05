import { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { nanoid } from "nanoid";

function App() {
   const INITIAL_DATA = [
      { id: nanoid(), name: "Todo1", completed: false },
      { id: nanoid(), name: "Todo2", completed: false },
      { id: nanoid(), name: "Todo3", completed: false },
   ];

   const [tasks, setTasks] = useState(INITIAL_DATA);
   const [filter, setFilter] = useState("all");

   let filterFunction;
   if (filter === "all") {
      filterFunction = (task) => task;
   } else if (filter === "todo") {
      filterFunction = (task) => task.completed === false;
   } else {
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
      setFilter(newFilter);
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
            <ToggleButtonGroup
               value={filter}
               exclusive
               onChange={handleFilter}
               aria-label="text alignment"
            >
               <ToggleButton value="all" aria-label="all">
                  <Button variant="outlined">All</Button>
               </ToggleButton>
               <ToggleButton value="todo" aria-label="todo">
                  <Button variant="outlined">To do</Button>
               </ToggleButton>
               <ToggleButton value="done" aria-label="done">
                  <Button variant="outlined">Done</Button>
               </ToggleButton>
            </ToggleButtonGroup>
         </div>

         <div className="todo-item-container">{taskList}</div>
      </div>
   );
}

export default App;
