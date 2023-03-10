import React, { useState } from "react";
import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({
   id,
   name,
   completed,
   toggleCheckbox,
   updateTask,
   deleteTask,
}) {
   const [isEditing, setIsEditing] = useState(false);
   const [editingFieldText, setEditingFieldText] = useState("");

   if (isEditing === false) {
      return (
         <div className="todo-item" id={id}>
            {completed ? (
               <del style={{ color: "red", overflow: "auto" }}>{name}</del>
            ) : (
               <p style={{ overflow: "auto" }}>{name}</p>
            )}
            <div className="icons">
               <Checkbox
                  checked={completed}
                  onClick={() => {
                     toggleCheckbox(id);
                  }}
               />
               <IconButton
                  onClick={() => setIsEditing(true)}
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
   } else {
      return (
         <div className="todo-item" id={id}>
            <form>
               <TextField
                  fullWidth
                  style={{ justifyContent: "center" }}
                  sx={{
                     "& .MuiInputBase-input": {
                        padding: "0.1rem",
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
                        setIsEditing(false);
                        updateTask(id, editingFieldText);
                     }}
                  >
                     Submit
                  </Button>
               </div>
            </form>
         </div>
      );
   }
}
