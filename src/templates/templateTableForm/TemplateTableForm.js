import React from "react";
import { Card } from "@mui/material";
import { templateTableFormStyles } from "./style";
import CustomTabs from "../../componentsLibrary/tabs/CustomTabs";
import { CardFooter } from "reactstrap";


const TemplateTableForm = ({ arrayTabs, footer }) => {
  const classes = templateTableFormStyles();

  return (
    <>
      <Card>
        <CustomTabs arrayTabs={arrayTabs} />

        <CardFooter className= {classes.footer}>{footer}</CardFooter>

        {/* <div
          style={{ display: "flex", justifyContent: "flex-end", padding: 25 }}
        >
          <CustomContainedButton color="inherit" label="Cancelar" />

          <div style={{ paddingLeft: 50 }}>
            <CustomContainedButton label="Salvar" />
          </div>
        </div> */}
      </Card>
    </>
  );
};

export default TemplateTableForm;
