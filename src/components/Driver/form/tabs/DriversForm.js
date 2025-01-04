import React from "react";
import TemplateTableForm from "../../../../templates/templateTableForm/TemplateTableForm";
import Drivers from "./Drivers";
import DriversSubmit from "../DriversSubmit";
import Address from "./Address";

const DriversForm = () => {
  const arrayTabs = [
    {
      title: <b>Motorista</b>,
      content: <Drivers />,
    },
    {
      title: <b>Endereço</b>,
      content: <Address />,
    },
  ];
  return (
    <>
      <TemplateTableForm arrayTabs={arrayTabs} footer={<DriversSubmit />} />
    </>
  );
};

export default DriversForm;
