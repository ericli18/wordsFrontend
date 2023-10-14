import { Link } from "react-router-dom";

const WordCard = ({ word }) => {
  return (
    <Link to={`/words/${word.id}`}  className="link">
      <div className="card-outer">
        <h3 className="card-title">{word.word}</h3>
        {/* <p className='card-description'>{word.definition}</p> */}
      </div>
    </Link>
  );
};

export default WordCard;
