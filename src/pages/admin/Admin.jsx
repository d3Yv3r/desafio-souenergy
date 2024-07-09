import { CirclePlus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { CarTable } from "./components/CarTable";
import { SearchInput } from "./components/SearchInput";
import { Modal } from "./components/Modal";

export const Admin = () => {
  const [tableData, setTableData] = useState([]);
  const [options, setOptions] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    color: "",
    licensePlate: "",
    city: "",
    mileage: "",
    registrationDate: "",
  });

  const handleFilter = () => {
    console.log(searchValue);
    if (!searchValue) {
      handleRequest();
      return;
    }
    const filter = tableData.filter((item) => {
      return item.brand === searchValue.brand;
    });
    console.log(filter);
    setTableData(filter);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleEditCar = async (id) => {
    const carId = tableData.find((item) => item.id === id);
    setFormData({
      id: carId.id,
      brand: carId.brand,
      model: carId.model,
      year: carId.year,
      price: carId.price,
      color: carId.color,
      licensePlate: carId.licensePlate,
      city: carId.city,
      mileage: carId.mileage,
      registrationDate: carId.registrationDate,
    });
    handleOpenModal();
  };

  const handleRemoveCar = async (id) => {
    await fetch(`http://localhost:3000/cars/${id}`, {
      method: "delete",
    });
    handleRequest();
  };

  const handleRequest = () =>
    fetch("http://localhost:3000/cars")
      .then((response) => response.json())
      .then((json) => {
        setTableData(json);
        setOptions(json);
      });

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
          <SearchInput
            options={options}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <button
            className="bg-primary-100 p-4 rounded text-white"
            onClick={() => handleFilter()}
          >
            <Search />
          </button>
        </div>
      </section>
      <CarTable
        tableData={tableData}
        handleRemoveCar={handleRemoveCar}
        handleEditCar={handleEditCar}
      />

      <Modal
        open={isOpen}
        setOpen={setIsOpen}
        handleRequest={handleRequest}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};
