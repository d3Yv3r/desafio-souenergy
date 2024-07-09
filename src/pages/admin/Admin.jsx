import { CirclePlus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { CarTable } from "./components/CarTable";
import { SearchInput } from "./components/SearchInput";
import { Modal } from "./components/Modal";

export const Admin = () => {
  const [tableData, setTableData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleRequest = () =>
    fetch("http://192.168.0.8:3000/cars")
      .then((response) => response.json())
      .then((json) => setTableData(json));

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <div className="flex flex-col gap-4 h-screen">
      <button
        onClick={() => handleOpenModal()}
        className="w-fit ml-auto col-span-2"
      >
        <div className="flex justify-end flex-row gap-2 bg-primary-100 p-2 rounded text-white">
          <CirclePlus />
          <span>Adicionar</span>
        </div>
      </button>

      <section className="flex flex-col gap-4 bg-white p-6 rounded">
        <div className="flex items-center gap-3">
          <SearchInput tableData={tableData} />
          <button
            className="bg-primary-100 p-4 rounded text-white"
            onClick={() => {}}
          >
            <Search />
          </button>
        </div>
      </section>
      <CarTable tableData={tableData} />

      <Modal open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};
