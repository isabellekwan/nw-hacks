"use client";

import React from "react";
import Message from "../../components/message";
import UploadPhoto from "../../components/uploadPhoto";
import SubmitPhoto from "../../components/submitPhoto";
import { Typography } from "@mui/material";
import SimpleBottomNavigation from "../../components/Nav";
import NextMeds from "../../components/nextMeds";
/*
- call on getUser(username) from getData to get their user data, so their username 
- do like hi {username} or something 
- make a button for the take photo, upload photo, edit message, view stuff 
*/
function Home() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Hi Username!
      </Typography>
      <Message />
      <NextMeds />
      <UploadPhoto />
      <SubmitPhoto />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Home;
