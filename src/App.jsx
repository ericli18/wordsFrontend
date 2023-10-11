import { useEffect } from "react";
import wordService from "./services/words";
import Header from "./components/Header";
import WordDisplay from "./components/WordDisplay";
import { useUserDispatch } from "./contexts/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
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
      <Router>
        <Header />
        <WordDisplay />
      </Router>
  );
};

export default App;
