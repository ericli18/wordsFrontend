import { useState, useEffect } from "react";
import wordService from "./services/words";
import WordHeader from "./components/WordHeader";
import Header from "./components/Header";
import WordDisplay from "./components/WordDisplay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUserDispatch } from "./contexts/UserContext";

const App = () => {
  const queryClient = new QueryClient();
  const userDispatch = useUserDispatch();

  useEffect(() => {
    const tempUser = window.localStorage.getItem("loggedUser");
    if (tempUser !== null) {
      const user = JSON.parse(tempUser);
      userDispatch({ type: "SET_USER", payload: user });
      wordService.setToken(user.token);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <WordHeader />
      <WordDisplay />
    </QueryClientProvider>
  );
};

export default App;
