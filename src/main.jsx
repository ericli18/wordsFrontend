import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "normalize.css";
import { DateContextProvider } from "./contexts/DateContext";
import { UserContextProvider } from "./contexts/UserContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <DateContextProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </DateContextProvider>
    </UserContextProvider>
  </QueryClientProvider>
);
