import parse from "html-react-parser";
const Word = ({ selectedWord }) => {
  const handleEtymology = () => {
    if (selectedWord) {
      return parse(selectedWord.etymology);
    }
    return null;
  };

  return (
    <div className="word">
      <div className="important">
        <h1 className="text">{selectedWord?.word}</h1>
      </div>
      <div className="info">
          <p>{selectedWord?.definition}</p>
          {handleEtymology()}
      </div>
    </div>
  );
};

export default Word;
