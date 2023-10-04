import { useState, useEffect } from "react";
import wordService from "./services/words";
import WordHeader from "./components/WordHeader";
import Header from "./components/Header";
import WordDisplay from "./components/WordDisplay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tempUser = window.localStorage.getItem("loggedUser");
    if (tempUser !== null) {
      const user = JSON.parse(tempUser);
      setUser(user);
      wordService.setToken(user.token);
    }
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <Header user={user} setUser={setUser} />
      <WordHeader />
      <WordDisplay />
    </QueryClientProvider>
  );
};

export default App;
