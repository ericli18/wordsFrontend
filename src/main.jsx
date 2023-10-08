import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "normalize.css";
import { DateContextProvider } from "./contexts/DateContext";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <DateContextProvider>
      <App />
    </DateContextProvider>
  </UserContextProvider>
);
