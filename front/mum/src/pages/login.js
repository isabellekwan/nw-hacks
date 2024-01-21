"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { useState } from "react";
import CreateAccount from "../../components/createaccount";
import SignIn from "../../components/signin";



function Login() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <div>
      <div>
        <Button
          variant="outlined"
          sx={{
            marginBottom: "10px",
            color: "white",
            border: "1px solid white",
            borderRadius: "15px",
            width: "30vw",
            backgroundColor: "transparent",
          }}
          onClick={() => setLogin(!login)}
        >
          Login
        </Button>
        {login && <SignIn />}
      </div>

      <br />

      <div>
        <Button
          variant="outlined"
          sx={{
            marginBottom: "10px",
            border: "1px solid white",
            color: "white",
            borderRadius: "15px",
            width: "30vw",
            backgroundColor: "transparent",
          }}
          onClick={() => setSignup(!signup)}
        >
          Sign Up
        </Button>
        {signup && <CreateAccount />}
      </div>
    </div>
  );
}

export default Login;
