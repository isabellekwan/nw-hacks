import React from "react";
import { Box } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
// import { LogoutIcon } from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

export default function SimpleBottomNavigation() {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        backgroundColor: "lightblue",
        border: "1px solid black",
      }}
    >
      <BottomNavigation
        showLabels
        onChange={() => {
          router.push("/");
        }}
      >
        <BottomNavigationAction label="Log Out" />
      </BottomNavigation>
    </Box>
  );
}
