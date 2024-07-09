import { useEffect, useState } from "react";
import { Columns2, Rows3 } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { CarCard, Drawer } from "./components";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [carData, setCarData] = useState();
  const [isGrid, setIsGrid] = useState(false);

  const handleRequest = () =>
    fetch("http://192.168.0.8:3000/cars")
      .then((response) => response.json())
      .then((json) => setData(json));

  const handleChangeStyle = () => {
    setIsGrid(!isGrid);
  };

  const handleClickOpen = async (id) => {
    let carId = data.find((item) => item.id === id);
    carId = { ...carId, views: carId.views + 1 };
    await fetch(`http://192.168.0.8:3000/cars/${id}`, {
      method: "put",
      body: JSON.stringify(carId),
    });
    handleRequest();
    setCarData(carId);
    setOpen(true);
  };

  useEffect(() => {
    handleRequest();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => handleChangeStyle()}
        className="w-fit ml-auto col-span-2"
      >
        {!isGrid ? (
          <div className="flex justify-end flex-row gap-2 bg-primary-100 p-2 rounded text-white">
            <Rows3 />
            <span>Lista</span>
          </div>
        ) : (
          <div className="flex justify-end flex-row gap-2 bg-primary-100 p-2 rounded text-white">
            <Columns2 />
            <span>Grade</span>
          </div>
        )}
      </button>

      <div
        className={twMerge("flex flex-col gap-4", isGrid && "grid grid-cols-2")}
      >
        {data?.map((item, index) => (
          <CarCard key={index} {...item} handleClickOpen={handleClickOpen} />
        ))}
      </div>
      <Drawer open={open} setOpen={setOpen} carData={carData} />
    </div>
  );
};
