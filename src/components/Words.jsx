import parse from "html-react-parser";
const Word = ({ selectedWord, setSelectedWord, hashDate, run, setRun}) => {
  const handleEtymology = () => {
    if (selectedWord) {
      return parse(selectedWord.etymology);
    }
    return null;
  };

  return (
    <div className="word">
      <div className="important">
        <div className="magic">
          <h1 className="text">
            {selectedWord?.word}
          </h1>
        </div>
      </div>
      <div className="info">
        <p>{selectedWord?.definition}</p>
        <div>{handleEtymology()}</div>
      </div>
    </div>
  );
};
export default Word;
