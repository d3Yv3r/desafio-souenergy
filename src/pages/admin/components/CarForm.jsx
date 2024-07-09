import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { AlertWrap } from "@/components/AlertWrap";
import { getLabelText } from "../constantes";

const carImg = [
  "images/carsOne.jpg",
  "images/carsTwo.jpg",
  "images/carsThree.jpg",
  "images/carsFour.jpg",
];

export const CarForm = ({ setOpen }) => {
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

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://192.168.0.8:3000/cars", {
      method: "post",
      body: JSON.stringify({ ...formData, images: carImg }),
    })
      .then(() => {
        <AlertWrap type="success" text="Veículo cadastrado com sucesso!" />;
        setOpen(false);
      })
      .catch((error) => {
        <AlertWrap
          type="error"
          text="Erro ao tentar cadastrar novo veículo!"
        />;

        console.error(error);
      });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {Object.keys(formData).map((key, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <TextField
                className="w-full"
                fullWidth
                label={getLabelText(key)}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
          ))}
          <div className="w-full mt-4">
            <TextField
              type="file"
              inputProps={{ multiple: true, accept: "image/*" }}
              style={{ display: "none" }}
              id="upload-file"
              onChange={(event) => setImages(event.target.files)}
            />
            <label htmlFor="upload-file">
              <Button component="span" className="w-full font-bold">
                Upload
              </Button>
            </label>
            {images.length > 0 && (
              <div className="text-center mt-1">
                <span className="bg-primary-100 text-white rounded p-2">
                  {images.length} imagens carregadas
                </span>
              </div>
            )}
          </div>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-full p-6"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
