import React, { useContext } from "react";
import "./DashboardEmployees.css";
import { DashboardContext } from "../../context/DashboardContext";
import PieChart from "../../Components/AllChart/PieChart";

export default function DashboadEmployees() {
  const { dataChart, yearData, changeYearData } = useContext(DashboardContext);

  return (
    <div className="global-container">
      <h1>Les résultats de l'année : {yearData}</h1>
      <form>
        <label htmlFor="year">Choisissez une date</label>
        <select id="year" onChange={(e) => changeYearData(e.target.value)}>
          <option selected={yearData === "2020" && "selected"} value="2020">
            2020
          </option>
          <option selected={yearData === "2019" && "selected"} value="2019">
            2019
          </option>
          <option selected={yearData === "2018" && "selected"} value="2018">
            2018
          </option>
          <option selected={yearData === "2017" && "selected"} value="2017">
            2017
          </option>
        </select>
      </form>

      <h2>Les secteurs qui ont recruté :</h2>
      <PieChart
        data={dataChart.chart5}
        labels={["Marketing", "Securité", "Front-end"]}
      />

      <h2>Niveaux d'études : </h2>
      <PieChart
        data={dataChart.chart6}
        labels={["Bac", "> Bac + 2", "> Bac + 5"]}
      />

      <h2>L'âge des nouveaux employeés :</h2>
      <PieChart
        data={dataChart.chart7}
        labels={["< 20", "> 20 && < 30", "> 30 && < 60"]}
      />

      <h2>La nationalité :</h2>
      <PieChart data={dataChart.chart8} labels={["USA", "Malagasy", "UK"]} />
    </div>
  );
}
