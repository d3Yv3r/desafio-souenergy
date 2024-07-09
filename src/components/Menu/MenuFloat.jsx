import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MenuFloat = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="w-full fixed bottom-0">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<DirectionsCarIcon />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="Admin"
          icon={<AdminPanelSettingsIcon />}
          onClick={() => navigate("/admin")}
        />
      </BottomNavigation>
    </div>
  );
};
