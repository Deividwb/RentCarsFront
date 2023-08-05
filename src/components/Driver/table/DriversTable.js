import React, { useCallback, useEffect } from "react";
import CustomTable from "../../../componentsLibrary/tables/customTable/CustomTable";
import { headCells } from "../utils/driversTable.constants";
import DriversRow from "./DriversRow";
import { baseUrlRoute } from "../utils/drivers.constants";
import RenderIf from "../../../utils/renderIf/RenderIf";
import { useDispatch } from "react-redux";
import {  getAllDrivers } from "../store/drivers/drivers.sagas";
import { useAllDrivers } from "../hooks/use-drivers";
import { clearDrivers } from "../store/drivers/drivers.store";

const DriversTable = () => {
  const dispatch = useDispatch();
  const allDrivers = useAllDrivers();

  const setLoadAllDrivers = useCallback(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);

  useEffect(() => {
    setLoadAllDrivers();
    return () => dispatch(clearDrivers());
  }, [dispatch, setLoadAllDrivers]);

  return (
    <>
      <RenderIf condition={allDrivers.length}>
        <CustomTable
          data={allDrivers}
          headCells={headCells}
          redirect={`/${baseUrlRoute}/new`}
          checkBox
          rowComponent={DriversRow}
          title={"Motoristas"}
        />
      </RenderIf>
    </>
  );
};

export default DriversTable;
