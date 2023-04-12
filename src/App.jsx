import { useState, useEffect } from "react";
import wordService from "./services/words";
import Header from "./components/Header";
import Word from "./components/Words";

const App = () => {
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [date, setDate] = useState(new Date());
  const [run, setRun] = useState(false);

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

  const getRandomId = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const temp = words[randomIndex];
    temp.word = trimWord(temp.word);
    temp.definition = trimWord(temp.definition);
    temp.etymology = trimWord(temp.etymology);
    return temp;
  };

  const hashDate = (date) => {
    const id = (date.getDate() + date.getMonth() + date.getFullYear()) * 15;
    let counter = id % words.length;
    while (words[counter].access) {
      counter++;
    }
    const temp = words[counter];
    if (temp.word[0] === "[") {
      temp.word = trimWord(temp.word);
      temp.definition = trimWord(temp.definition);
      temp.etymology = trimWord(temp.etymology);
    }
    wordService.update(temp.id, date);
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

  const trimWord = (entry) => {
    return entry.substring(2, entry.length - 2);
  };

  const handleNextWord = () => {
    setSelectedWord(getRandomId());
  };

  return (
    <div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <Header dateIn={date} changeDate={changeDate} />
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
