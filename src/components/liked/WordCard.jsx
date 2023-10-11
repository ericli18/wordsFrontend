import { Link } from "react-router-dom";

const WordCard = ({ word }) => {
  return (
    <Link to={`/words/${word.id}`}>
      <div>
        <h3>{word.word}</h3>
        <p>{word.definition}</p>
      </div>
    </Link>
  );
};

export default WordCard;
