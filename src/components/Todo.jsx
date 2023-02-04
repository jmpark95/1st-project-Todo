import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";

export default function Todo({
   id,
   name,
   completed,
   updatedCompletedStatus,
   updateName,
   deleteTask,
}) {
   const [template, setTemplate] = useState("Default");
   const [editingFieldText, setEditingFieldText] = useState("");

   if (template === "Default") {
      return (
         <div className="todo-item" id={id}>
            <p>{name}</p>
            <div className="icons">
               <Checkbox
                  defaultChecked={completed}
                  onClick={() => {
                     setTemplate("Deleted");
                     updatedCompletedStatus(id);
                  }}
               />
               <IconButton
                  onClick={() => setTemplate("Editing")}
                  sx={{ color: "#ff9800" }}
               >
                  <EditIcon />
               </IconButton>
               <IconButton
                  sx={{ color: "#d32f2f" }}
                  onClick={() => deleteTask(id)}
               >
                  <DeleteIcon />
               </IconButton>
            </div>
         </div>
      );
   } else if (template === "Editing") {
      return (
         <div className="todo-item" id={id}>
            <TextField
               sx={{
                  ".MuiInputBase-input": {
                     padding: "0.3rem",
                  },
               }}
               value={editingFieldText}
               onChange={(e) => setEditingFieldText(e.target.value)}
            />
            <div className="icons">
               <Button
                  variant="outlined"
                  type="submit"
                  onClick={() => {
                     setTemplate("Default");
                     updateName(id, editingFieldText);
                  }}
               >
                  Edit
               </Button>
            </div>
         </div>
      );
   } else if (template === "Deleted") {
      return (
         <div className="todo-item" id={id}>
            <del style={{ color: "red" }}>{name}</del>
            <div className="icons">
               <Checkbox
                  defaultChecked={completed}
                  onClick={() => {
                     setTemplate("Default");
                     updatedCompletedStatus(id);
                  }}
               />
               <IconButton sx={{ color: "#ff9800" }}>
                  <EditIcon />
               </IconButton>
               <IconButton sx={{ color: "#d32f2f" }}>
                  <DeleteIcon />
               </IconButton>
            </div>
         </div>
      );
   }
}
