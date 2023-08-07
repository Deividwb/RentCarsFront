import React from "react";
import TemplateTableForm from "../../../../templates/templateTableForm/TemplateTableForm";
import Drivers from "./Drivers";
import DriversSubmit from "../DriversSubmit";

const DriversForm = () => {
  const arrayTabs = [
    {
      title: "Motorista",
      content: <Drivers />
    }
  ]
  return (
    <>
      <TemplateTableForm arrayTabs={arrayTabs} footer= {<DriversSubmit />}/>
    </>
  );
};

export default DriversForm;
