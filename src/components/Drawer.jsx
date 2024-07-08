import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export const Drawer = ({ open, setOpen }) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <div>Carros</div>
    </SwipeableDrawer>
  );
};
