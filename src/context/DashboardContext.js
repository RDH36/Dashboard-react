import React, { createContext, useState } from "react";
import fulldata from "./fulldata";

export const DashboardContext = createContext();

const DashboardContextProvider = (props) => {
  const [dataChart, setDataChart] = useState(fulldata["2020"]);
  const [yearData, setYearData] = useState("2020");

  const changeYearData = (el) => {
    setDataChart(fulldata[el]);
    setYearData(el);
  };

  return (
    <DashboardContext.Provider value={{ dataChart, yearData, changeYearData }}>
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
