import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import EditMessage from "./editMessage";

export default function Message() {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Your Current Message:
          </Typography>
          <Typography variant="body2">
            Hey username, it's your mum here. Just wanted to remind you to take
            the chicken out of the fridge today.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setEdit(!edit)}>
            {edit ? "Cancel" : "Edit Message"}
          </Button>
        </CardActions>
      </Card>
      {edit && <EditMessage />}
    </div>
  );
}
