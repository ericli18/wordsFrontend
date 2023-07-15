import { useState, useEffect } from "react";
import wordService from "./services/words";
import WordHeader from "./components/WordHeader";
import Header from "./components/Header"
import Word from "./components/Words";

const App = () => {
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [date, setDate] = useState(new Date());
  const [run, setRun] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    wordService.getAll().then((initialWords) => {
      setWords(initialWords);
    });
  }, []);

  useEffect(() => {
    if (words.length > 0) {
      setSelectedWord(hashDate(date));
    }
  }, [words, date]);


  const hashDate = (date) => {
    const id = (date.getDate() + date.getMonth() + date.getFullYear()) * 15;
    let counter = id % words.length;
    while (words[counter].dateAccessed == 0) {//will decide whether or not to implement later
      counter++;
    }
    const temp = words[counter];
    return temp;
  };

  const changeDate = (date, change) => {
    const subtract = 24 * 60 * 60 * 1000;
    //bro this is so jank
    if (
      date < new Date().setTime(new Date().getTime() - subtract) &&
      change === 1
    )
      setDate(new Date(date.setDate(date.getDate() + change)));
    else if (date > new Date(2023, 2, 27) && change === -1)
      setDate(new Date(date.setDate(date.getDate() + change)));
  };

  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <WordHeader dateIn={date} changeDate={changeDate} />
      <Word
        selectedWord={selectedWord}
        setSelectedWord={setSelectedWord}
        hashDate={hashDate}
        run = {run}
        setRun = {setRun}
      />
    </div>
  );
};

export default App;
