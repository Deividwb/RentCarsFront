import React from "react";
import TemplateTableForm from "../../../../templates/templateTableForm/TemplateTableForm";
import Drivers from "./Drivers";

const DriversForm = () => {
  const arrayTabs = [
    {
      title: "Motorista",
      content: <Drivers />
    }
  ]
  return (
    <>
      <TemplateTableForm arrayTabs={arrayTabs}/>
    </>
  );
};

export default DriversForm;
