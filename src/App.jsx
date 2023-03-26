import { useState, useEffect } from "react";
import wordService from "./services/words";
import Header from "./components/Header";
import Word from "./components/Words";

const App = () => {
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    wordService.getAll().then((initialWords) => {
      setWords(initialWords);
    });
  }, []);

  useEffect(() => {
    if(words.length > 0) {
      setSelectedWord(getRandomId());
    }
  }, [words]);

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
  };

  const removeBlocker = () => {
    const blockContainer = document.querySelector(".blockContainer");
    const blocker1 = document.querySelector(".blocker1");
    const blocker2 = document.querySelector(".blocker2");
    blocker1.classList.add("blocker1Remove");
    blocker2.classList.add("blocker2Remove");
    setTimeout(() => {
      blockContainer.remove()
    }, 2000);
  };

  return (
    <div>
      <div className="stars">
        
      </div>
      <div className="twinkling">
      </div>
      {/* <div className="blockContainer" onClick={removeBlocker}>
        <div className="blocker1"></div>
        <div className="blocker2"></div>
      </div> */}
      <Header showAll={handleNextWord}/>
      <Word selectedWord={selectedWord} />
    </div>
  );
};

export default App;
