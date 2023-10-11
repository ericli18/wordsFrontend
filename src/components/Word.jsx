import parse from "html-react-parser";
import WordHeader from "./WordHeader";
import { randomWord } from "./wordHelper";
import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs"; //necessary for date formatting
import wordService from "../services/words";

const Word = ({ words, date }) => {
  const queryClient = useQueryClient();
  const currentDate = dayjs(date).format();

  const selectedWord = randomWord(words, date);
  const handleEtymology = () => {
    if (selectedWord) {
      return parse(selectedWord.etymology);
    }
    return null;
  };

  if (selectedWord.accessDate == 0) {
    wordService
      .update({ ...selectedWord, accessDate: currentDate })
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["words"] });
      });
  }

  return (
    <div>
      <WordHeader />
      <div className='word'>
        <div className='important'>
          <div className='magic important'>
            <h1 className='text'>{selectedWord?.word}</h1>
          </div>
        </div>
        <div className='info'>
          <p>{selectedWord?.definition}</p>
          <div>{handleEtymology()}</div>
        </div>
      </div>
    </div>
  );
};
export default Word;
