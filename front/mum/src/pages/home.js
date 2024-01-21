"use client";

import React from "react";
import Message from "../../components/message";
import UploadPhoto from "../../components/uploadPhoto";
import SubmitPhoto from "../../components/submitPhoto";
import { Typography, Box } from "@mui/material";
import SimpleBottomNavigation from "../../components/Nav";
import NextMeds from "../../components/nextMeds";
import Header from "../../components/header";
/*
- call on getUser(username) from getData to get their user data, so their username 
- do like hi {username} or something 
- make a button for the take photo, upload photo, edit message, view stuff 
*/
function Home() {
  return (
    <div>
      <Header/>
      <Typography variant="h1" gutterBottom style={{ color: "#004f2d" }}>
        Hi Username!
      </Typography>
      <Message />
      <NextMeds />
      <div style={{ display: "flex" }}>
        <UploadPhoto style={{ flex: 1, marginRight: "10px" }} />
        <SubmitPhoto style={{ flex: 1 }} />
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default Home;
