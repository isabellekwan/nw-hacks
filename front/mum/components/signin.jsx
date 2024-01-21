"use client";
import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { OutlinedInput, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import getUser from "@/api/getData";

export default function SignIn() {
  const router = useRouter();

  const [showPass, setShowPass] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(true);

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const nextPage = () => {
    router.push("/home");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (username.trim() === "" || password.trim() === "") {
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

      nextPage();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "10px",
        paddingBottom: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <TextField
          id="username"
          label="Username"
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            width: "25ch",
            paddingBottom: "10px",
            paddingTop: "10px",
            "& label": {
              color: "white",
            },
            "& .MuiInputBase-root": {
              color: "white",
              "&:before": {
                borderBottomColor: "white",
              },
              "&:after": {
                borderBottomColor: "white",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "white",
              },
            },
          }}
        />
      </Box>
      <FormControl
        sx={{
          m: 1,
          width: "25ch",
          "& label": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPass ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      {!isFormValid && (
        <div style={{ color: "pink" }}>
          <Typography variant="h6">
            <i>please fill in all fields</i>
          </Typography>
        </div>
      )}
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}
