import { useState, useEffect } from "react";
import wordService from "./services/words";
import parse from "html-react-parser";

const App = () => {
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    wordService.getAll().then((initialWords) => {
      setWords(initialWords);
      console.log(initialWords[0]);
      for (let i = 0; i < initialWords.length; i++) {
        wordService.create(initialWords[i]);
      }
    });
  }, []);

  const getRandomId = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const temp = words[randomIndex];
    temp.word = trimWord(temp.word);
    temp.definition = trimWord(temp.definition);
    temp.etymology = trimWord(temp.etymology);
    return temp;
  };

  const trimWord = (entry) => {
    return entry.substring(2, entry.length - 2);
  };

  const handleNextWord = () => {
    setSelectedWord(getRandomId());
    if (selectedWord) {
      console.log(typeof selectedWord.etymology);
    }
  };

  const handleEtymology = () => {
    if (selectedWord) {
      return parse(selectedWord.etymology);
    }
    return null;
  };

  return (
    <div>
      <h1>Random Word</h1>
      <button onClick={handleNextWord}>Next Word</button>
      <div className="word">
        <p>{selectedWord?.word}</p>
        <p>{selectedWord?.definition}</p>
        {handleEtymology()}
      </div>
    </div>
  );
};

export default App;
