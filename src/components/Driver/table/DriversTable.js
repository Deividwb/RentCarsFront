import React, { useEffect, useState } from "react";
import CustomTable from "../../../componentsLibrary/tables/customTable/CustomTable";
import { headCells } from "../utils/driversTable.constants";
import axios from "axios";
import DriversRow from "./DriversRow";
import { baseUrlRoute } from "../utils/drivers.constants";

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
      <CustomTable
        data={formDriver}
        headCells={headCells}
        redirect={`/${baseUrlRoute}/new`}
        checkBox
        rowComponent={DriversRow}
        title={"Motoristas"}
      />
    </>
  );
};

export default DriversTable;
