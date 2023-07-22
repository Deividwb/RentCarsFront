import React, { useEffect, useState } from "react";
import CustomTable from "../../../componentsLibrary/tables/CustomTable";
import { headCells } from "../utils/driversTable.constants";
import axios from "axios";
import DriversRow from "./DriversRow";
import { PDFDownloadLink } from "@react-pdf/renderer";
import LoaderReport from "../../Reports/loaderReport";
import { Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const DriversTable = () => {
  const [formDriver, setFormDriver] = useState([]);

  async function loadDrivers() {
    try {
      const response = await axios.get("https://localhost:7184/api/Drivers");
      setFormDriver(response.data);
    } catch (error) {
      console.error("Error loading drivers:", error);
    }
  }

  useEffect(() => {
    loadDrivers();
  }, []);

  return (
    <>
      <PDFDownloadLink document={<LoaderReport />} fileName="driver.pdf">
        <Button variant="contained" startIcon={<PictureAsPdfIcon />}>
          Gerar Relatório
        </Button>
      </PDFDownloadLink>
      <CustomTable
        data={formDriver}
        headCells={headCells}
        checkBox
        rowComponent={DriversRow}
        title={"Motoristas"}
      />
    </>
  );
};

export default DriversTable;
