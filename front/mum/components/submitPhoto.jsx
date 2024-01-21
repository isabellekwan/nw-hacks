import React from "react";
import { Button } from "@mui/material";

export default function SubmitPhoto() {
  return (
    <div>
      <Button 
        variant="contained"
        style={{ width: "100%", height: "8vw", color: "#fff", backgroundColor: "#004f2d" }}>
        Upload Photo
      </Button>
    </div>
  );
}
