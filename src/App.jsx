import { useState, useEffect } from "react";
import wordService from "./services/words";
import userService from "./services/user";
import WordHeader from "./components/WordHeader";
import Header from "./components/Header";
import Word from "./components/Word";
import WordDisplay from "./components/WordDisplay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [likedWords, setLikedWords] = useState([]);
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tempUser = window.localStorage.getItem("loggedUser");
    if (tempUser !== null) {
      const user = JSON.parse(tempUser);
      setUser(user);
      wordService.setToken(user.token);
    }
  }, []);

  useEffect(() => {
    if (words.length > 0) {
      setSelectedWord(hashDate(date));
    }
  }, [words, date]);

  const hashDate = (date) => {
    const id = (date.getDate() + date.getMonth() + date.getFullYear()) * 15;
    let counter = id % words.length;
    while (words[counter].dateAccessed == 0) {
      //will decide whether or not to implement later
      counter++;
    }
    const temp = words[counter];
    return temp;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Header user={user} setUser={setUser} />
      <WordHeader />
      <WordDisplay />
      {/* <Word
        selectedUser={user}
        selectedWord={selectedWord}
        likedWords={likedWords}
        setLikedWords={setLikedWords}
      /> */}
    </QueryClientProvider>
  );
};

export default App;
