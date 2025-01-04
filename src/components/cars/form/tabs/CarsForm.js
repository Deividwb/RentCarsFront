import React from "react";
import TemplateTableForm from "../../../../templates/templateTableForm/TemplateTableForm";

import CarsSubmit from "../CarsSubmit";
import Cars from "./Cars";

const CarsForm = () => {
  const arrayTabs = [
    {
      title: "Carros",
      content: <Cars />,
    },
  ];
  return (
    <>
      <TemplateTableForm arrayTabs={arrayTabs} footer={<CarsSubmit />} />
    </>
  );
};

export default CarsForm;
