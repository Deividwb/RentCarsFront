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

        <CardFooter className={classes.footer}>{footer}</CardFooter>
      </Card>
    </>
  );
};

export default TemplateTableForm;
