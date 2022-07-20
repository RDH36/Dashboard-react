import React from "react";
import "./Sidebar.css";
import iconDash from "./analytics.svg";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <nav className="sidenav">
      <img src={iconDash} alt="alalytics" />
      <Link to="/">FINANCES</Link>
      <Link to="/employees">EMPLOIES</Link>
    </nav>
  );
}
