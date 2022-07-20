import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DashboardContextProvider from "./context/DashboardContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardContextProvider>
        <App />
      </DashboardContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
