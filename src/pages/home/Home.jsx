import { CarCard } from "@/components/CarCard";
import { useState } from "react";
// import { Modal } from "@/components/Modal";
import { Drawer } from "@/components/Drawer";

const carData = [
  {
    image: "images/carsOne.jpg",
    price: "R$ 50.000,00",
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    views: 1234,
  },
  {
    image: "images/carsOne.jpg",
    price: "R$ 50.000,00",
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    views: 1234,
  },
  {
    image: "images/carsOne.jpg",
    price: "R$ 50.000,00",
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    views: 1234,
  },
  {
    image: "images/carsOne.jpg",
    price: "R$ 50.000,00",
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    views: 1234,
  },
];

export const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div className="flex flex-col gap-4">
      {carData.map((item, index) => (
        <CarCard key={index} {...item} handleClickOpen={handleClickOpen} />
      ))}
      {/* <Modal open={open} setOpen={setOpen} /> */}
      <Drawer open={open} setOpen={setOpen} />
    </div>
  );
};
