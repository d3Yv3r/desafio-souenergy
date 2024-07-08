import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useState } from "react";

export const MenuFloat = () => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: "100%" }} className="fixed bottom-1">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<DirectionsCarIcon />} />
        <BottomNavigationAction
          label="Admin"
          icon={<AdminPanelSettingsIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};
