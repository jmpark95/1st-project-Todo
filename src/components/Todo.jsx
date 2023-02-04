import React from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({ id, name, completed }) {
   return (
      <div className="todo-item">
         <p>{name}</p>
         <div className="icons">
            <Checkbox defaultChecked={completed} />
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
