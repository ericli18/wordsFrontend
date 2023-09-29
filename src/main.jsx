import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "normalize.css";
import { DateContextProvider } from "./contexts/DateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DateContextProvider>
    <App />
  </DateContextProvider>
);
