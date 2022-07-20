import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/Sidebar/SideBar";
import DashboadEmployees from "./Pages/DashboardEmployees/DashboadEmployees";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";

export default function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/" element={<DashboardFinance />} />
        <Route path="/employees" element={<DashboadEmployees />} />
      </Routes>
    </>
  );
}
