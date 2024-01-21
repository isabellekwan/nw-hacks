import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import EditMessage from "./editMessage";

export default function NextMeds() {
  return (
    <div>
      <Card sx={{ minWidth: 275, marginTop: 2, marginBottom: 2, backgroundColor: "#94c9a9"}}>
        <CardContent>
          <Typography variant="h3" component="div">
            Your Next Medication:
          </Typography>
          <Typography variant="h4">Today, 10:45 AM</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
