import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTabs = ({arrayTabs}) => {


  const [value, setValue] = useState(0);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = arrayTabs ? arrayTabs :[]

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            orientation="horizontal"
          >
            {tabs.map((tab, index) => (
              <Tab label={tab.title} {...a11yProps({ index })} />
            ))}
          </Tabs>
        </Box>

        {tabs.map((tab, index) => (
          <CustomTabPanel value={value} index={index}>
            {tab.content}
          </CustomTabPanel>
        ))}
      </Box>
    </>
  );
};

export default CustomTabs;
