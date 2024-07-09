import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircleMinus, Pencil } from "lucide-react";

export const CarTable = ({ tableData, handleRemoveCar, handleEditCar }) => {
  return (
    <TableContainer component={Paper} className="overflow-auto">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Marca</TableCell>
            <TableCell align="right">Modelo</TableCell>
            <TableCell align="right">Ano</TableCell>
            <TableCell align="right">Preço</TableCell>
            <TableCell align="right">Km</TableCell>
            <TableCell align="right">Placa</TableCell>
            <TableCell align="right">Cidade</TableCell>
            <TableCell align="right">Data de Cadastro</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.brand}
              </TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="right">{row.mileage}</TableCell>
              <TableCell align="right">{row.licensePlate}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.registrationDate}</TableCell>
              <TableCell align="right">
                <div className="flex items-center gap-2">
                  <button onClick={() => handleEditCar(row.id)}>
                    <Pencil size={16} />
                  </button>
                  <button onClick={() => handleRemoveCar(row.id)}>
                    <CircleMinus size={16} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
