import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { CarTable } from "./components/CarTable";

export const Admin = () => {
  const [tableData, setTableData] = useState([]);

  const handleRequest = () =>
    fetch("http://192.168.0.8:3000/cars")
      .then((response) => response.json())
      .then((json) => setTableData(json));

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <div className="flex flex-col gap-4 h-screen">
      <button onClick={() => {}} className="w-fit ml-auto col-span-2">
        <div className="flex justify-end flex-row gap-2 bg-primary-100 p-2 rounded text-white">
          <CirclePlus />
          <span>Adicionar</span>
        </div>
      </button>

      <CarTable tableData={tableData} />
    </div>
  );
};
