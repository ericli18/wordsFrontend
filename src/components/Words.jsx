import parse from "html-react-parser";
const Word = ({ selectedWord, setSelectedWord, hashDate, run, setRun}) => {
  const handleEtymology = () => {
    if (selectedWord) {
      return parse(selectedWord.etymology);
    }
    return null;
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const randomize = (e) => {
    if(run) return;

    let iterations = 0;

    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) return e.target.dataset.value[index];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iterations > e.target.dataset.value.length + 2) {
        clearInterval(interval);
        console.log("done");
        let temp = {
          word: "Prom",
          definition:
            "An event which Eric is finally getting around to asking Emilia to... Seriously, it's been a while. He's crossing his fingers that she says yes. Response required below. *The book of crosswords is not a bribe btw*",
          etymology:
            "<p className='funny'> <button>Yes</button> <a>Yes but smaller</a> </p>",
        };
        setRun(true);
        setSelectedWord(temp);
      }

      iterations += 1 / 5;
    }, 50);
  };

  const celebrate = () => {
    if (selectedWord.word[0] == "W") {
      setSelectedWord(hashDate(new Date()));
    } else {
      let temp = {
        word: "Woo!",
        definition: "Thanks, you're the best.",
        etymology: "<p className='funny'><a>continue to actual wotd</a></p>",
      };
      setSelectedWord(temp);
    }
  };

  return (
    <div className="word">
      <div className="important">
        <div className="magic">
          <h1 className="text" onMouseOver={randomize} data-value="Prom">
            {selectedWord?.word}
          </h1>
        </div>
      </div>
      <div className="info">
        <p>{selectedWord?.definition}</p>
        <div onClick={celebrate}>{handleEtymology()}</div>
      </div>
    </div>
  );
};
export default Word;
