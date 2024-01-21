import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

export default function EditMessage() {
  const [newMessage, setNewMessage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (newMessage.trim() === "") {
      setIsFormValid(false);
      return;
    }

    // Reset form validity
    setIsFormValid(true);
    try {
      // Call the postData function with username and password
      //   const response = await getUser(username);

      // Handle the response as needed
      //   console.log("Response:", response);

      // Clear the form fields after successful submission (if needed)
      setUsername("");
      setPassword("");

      //nextPage();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
          color: "black",
        }}
      >
        <TextField
          id="newMessage"
          label="New Message"
          variant="standard"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{
            width: "100%",
            paddingBottom: "10px",
            paddingTop: "10px",
            justifyContent: "left",
            alignItems: "left",
            "& label": {
              color: "black",
            },
            "& .MuiInputBase-root": {
              color: "black",
              "&:before": {
                borderBottomColor: "black",
              },
              "&:after": {
                borderBottomColor: "black",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "black",
              },
            },
          }}
        />
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
}
