import React, { useEffect, useState } from "react";
import CustomTable from "../../../componentsLibrary/tables/customTable/CustomTable";
import { headCells } from "../utils/driversTable.constants";
import DriversRow from "./DriversRow";
import { baseUrlRoute } from "../utils/drivers.constants";
import RenderIf from "../../../utils/renderIf/RenderIf";
import { useDispatch } from "react-redux";
import { getAllDrivers } from "../store/drivers/drivers.sagas";
import { useAllDrivers } from "../hooks/use-drivers";
import { Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useDriversHandlers } from "../hooks/use-drivers/useDriversHandlers";

const DriversTable = () => {
  const dispatch = useDispatch();
  const allDrivers = useAllDrivers();

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedChange = (newSelected) => {
    setSelectedItems(newSelected);
  };

  const {
    extraHandlers: { handleGenereteReport },
  } = useDriversHandlers();

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);

  return (
    <>
      <RenderIf condition={allDrivers.length}>
        <>
          <Button
            onClick={() => handleGenereteReport(selectedItems)}
            variant="contained"
            startIcon={<PictureAsPdfIcon />}
          >
            Gerar Contrato
          </Button>
        </>
      </RenderIf>
      <CustomTable
        data={allDrivers.length ? allDrivers : []}
        headCells={headCells}
        redirect={`/${baseUrlRoute}/new`}
        checkBox
        rowComponent={DriversRow}
        title={"Motoristas"}
        onSelectedChange={handleSelectedChange}
      />
    </>
  );
};

export default DriversTable;
