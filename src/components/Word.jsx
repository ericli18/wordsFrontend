import parse from "html-react-parser";
import WordHeader from "./WordHeader";
import { randomWord } from "./wordHelper";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import dayjs from "dayjs"; //necessary for date formatting
import wordService from "../services/words";
import { useDateDispatch, useDateValue } from "../contexts/DateContext";
import { useEffect } from "react";
import Heart from "./Heart";
import { useUserValue } from "../contexts/UserContext";

const Word = ({ words, date }) => {
  const queryClient = useQueryClient();
  const dateDispatch = useDateDispatch();
  const dateValue = useDateValue();
  const user = useUserValue();

  useEffect(() => {
    dateDispatch({ type: "SET", data: date });
  }, []);
  let currentDate = dayjs(date).isSame(dateValue, "d") ? date : dateValue;
  currentDate = dayjs(currentDate).format();
  const selectedWord = randomWord(words, currentDate);
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
            {user ? (
              <Heart
                selectedUser={user}
                selectedWord={selectedWord}
                className='heart'
              />
            ) : null}
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
