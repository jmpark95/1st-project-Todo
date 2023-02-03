import React from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo() {
   return (
      <div className="todo-item">
         <p>Todo</p>
         <div className="icons">
            <Checkbox defaultChecked={false} />
            <IconButton>
               <EditIcon />
            </IconButton>
            <IconButton>
               <DeleteIcon />
            </IconButton>
         </div>
      </div>
   );
}
