export const getLabelText = (key) => {
  switch (key) {
    case "brand":
      return "Marca";
    case "model":
      return "Modelo";
    case "price":
      return "Valor";
    case "year":
      return "Ano";
    case "color":
      return "Cor";
    case "licensePlate":
      return "Placa";
    case "city":
      return "Cidade";
    case "mileage":
      return "Km";
    case "registrationDate":
      return "Cadastrado em";
  }
};
