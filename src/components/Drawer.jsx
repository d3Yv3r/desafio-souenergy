import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Carousel } from "./Carousel";
import { Eye } from "lucide-react";

export const Drawer = ({ open, setOpen, carData }) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-row items-center justify-end gap-3">
          <Eye />
          <p>{carData?.views}</p>
        </div>

        <Carousel images={carData?.images} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="text-2xl">
              {carData?.brand} {carData?.model}
            </h3>

            <span className="ml-auto font-semibold">{carData?.price}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Ano: {carData?.year}</p>
              <p>Marca: {carData?.brand}</p>
              <p>Modelo: {carData?.model}</p>
              <p>Cor: {carData?.color}</p>
            </div>

            <div>
              <p>Placa: {carData?.licensePlate}</p>
              <p>Cidade: {carData?.city}</p>
              <p>Km: {carData?.mileage}</p>
              <p>Cadastro em: {carData?.registrationDate}</p>
            </div>
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  );
};
