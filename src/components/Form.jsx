import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Form() {
   return (
      <form action="">
         <TextField
            id="outlined-basic"
            placeholder="Enter Todo"
            variant="outlined"
            fullWidth
         />
         <Button variant="outlined">Add</Button>
      </form>
   );
}
